import { S3Event, Context, Callback, S3Handler } from 'aws-lambda';
import AWS from 'aws-sdk';
import csvParser from 'csv-parser';

const s3 = new AWS.S3();
const sqs = new AWS.SQS();

const queueUrl = process.env.SQS_URL!;
if (!queueUrl) {
	throw new Error('SQS_URL environment variable must be defined');
}

export const main: S3Handler = async (
	event: S3Event,
	context: Context,
	callback: Callback
) => {
	if (!event.Records || event.Records.length === 0) {
		return callback(new Error('No S3 records found in the event'));
	}

	const record = event.Records[0];
	const bucketName = record.s3.bucket.name;
	const objectKey = record.s3.object.key;

	if (!objectKey.startsWith('uploaded/products.csv')) {
		return callback(new Error('Only "uploaded/products.csv" is allowed'));
	}

	try {
		const s3Stream = s3
			.getObject({ Bucket: bucketName, Key: objectKey })
			.createReadStream();

		const sendMessagePromises: Promise<AWS.SQS.SendMessageResult>[] = [];

		await new Promise<void>((resolve, reject) => {
			s3Stream
				.pipe(csvParser())
				.on('data', (csvRecord) => {
					const messageBody = JSON.stringify(csvRecord);
					const sendPromise = sqs
						.sendMessage({
							QueueUrl: queueUrl,
							MessageBody: messageBody,
						})
						.promise();

					sendMessagePromises.push(sendPromise);
				})
				.on('end', () => resolve())
				.on('error', (error) => reject(error));
		});

		await Promise.all(sendMessagePromises);

		callback(null, {
			statusCode: 200,
			body: JSON.stringify({
				message: 'CSV parsed and messages sent to SQS successfully',
			}),
		});
	} catch (error) {
		callback(error as Error);
	}
};
