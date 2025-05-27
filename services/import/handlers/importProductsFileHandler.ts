import { headers } from '../../headers';
import {
	APIGatewayProxyEvent,
	Context,
	APIGatewayProxyResult,
} from 'aws-lambda';
import AWS from 'aws-sdk';

const s3 = new AWS.S3();
const lambda = new AWS.Lambda();

export const main = async (
	event: APIGatewayProxyEvent,
	context: Context
): Promise<APIGatewayProxyResult> => {
	console.log('API Gateway Event Received:', JSON.stringify(event));

	const bucketName = process.env.BUCKET_NAME!;

	// Validate the fileName query parameter
	const fileName = event.queryStringParameters?.fileName;
	if (!fileName) {
		return {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				message: 'fileName query parameter is required.',
			}),
		};
	}

	try {
		// Generate a signed URL for the file in the "uploaded/" folder
		const signedUrl = s3.getSignedUrl('putObject', {
			Bucket: bucketName,
			Key: `uploaded/${fileName}`,
			Expires: 60 * 5, // URL valid for 5 minutes
			ContentType: 'text/csv', // Set content type as CSV
		});

		console.log('Generated Signed URL:', signedUrl);

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				message: 'Signed URL generated successfully',
				signedUrl,
			}),
		};
	} catch (error) {
		console.error('Error generating signed URL:', error);
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ message: `${error}` }),
		};
	}
};
