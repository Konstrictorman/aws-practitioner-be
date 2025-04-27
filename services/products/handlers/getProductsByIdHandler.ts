import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { headers } from '../../headers';
import { getProductsById } from '../repo/getProductsById';

export const main = async (
	event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
	try {
		const productId = event.pathParameters?.productId;

		if (!productId) {
			return {
				statusCode: 400,
				headers,
				body: JSON.stringify({ message: 'Missing productId parameter' }),
			};
		}
		const matches = await getProductsById(productId);
		if (matches === undefined || matches.length === 0) {
			return {
				statusCode: 404,
				headers,
				body: JSON.stringify({
					message: `No product found with ID starting with '${productId}'`,
				}),
			};
		}

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify(matches),
		};
	} catch (error) {
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ message: 'Internal Server Error' }),
		};
	}
};
