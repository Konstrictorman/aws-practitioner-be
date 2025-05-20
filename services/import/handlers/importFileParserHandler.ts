// /services/import/handlers/importFileParserHandler.ts

import { S3Event, Context, Callback, S3Handler } from 'aws-lambda';
import AWS from 'aws-sdk';
import csvParser from 'csv-parser';

const s3 = new AWS.S3();

export const main: S3Handler = async (
	event: S3Event,
	context: Context,
	callback: Callback
) => {
	console.log('S3 Event Received:', JSON.stringify(event));

	// Validate the event
	if (!event.Records || event.Records.length === 0) {
		console.error('No S3 records found in the event');
		return;
	}

	const record = event.Records[0];
	const bucketName = record.s3.bucket.name;
	const objectKey = record.s3.object.key;

	if (!objectKey.startsWith('uploaded/')) {
		console.error('Object is not in the "uploaded/" folder');
		return;
	}

	try {
		// Set up a readable stream from S3
		const s3Stream = s3
			.getObject({
				Bucket: bucketName,
				Key: objectKey,
			})
			.createReadStream();

		// Parse the CSV file using a readable stream
		s3Stream
			.pipe(csvParser())
			.on('data', (record) => {
				console.log('CSV Record:', record);
			})
			.on('end', () => {
				console.log('CSV parsing completed');
				callback(null, {
					statusCode: 200,
					body: JSON.stringify({
						message: 'CSV parsing completed successfully',
					}),
				});
			})
			.on('error', (error) => {
				console.error('Error reading the CSV file:', error);
				callback(error);
			});
	} catch (error) {
		console.error('Error processing file:', error);
		callback(error as Error);
	}
};
