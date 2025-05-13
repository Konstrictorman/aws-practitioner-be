import { APIGatewayProxyResult } from 'aws-lambda';
import { headers } from '../../headers';
import { getProductsList } from '../repo/getProductsList';

export const main = async (): Promise<APIGatewayProxyResult> => {
	try {
		console.log('Fetching for products list...');
		const products = await getProductsList();
		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({ data: products, count: products.length }),
		};
	} catch (error) {
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ message: 'Internal Server Error' }),
		};
	}
};
