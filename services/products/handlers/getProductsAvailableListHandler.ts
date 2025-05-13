import { APIGatewayProxyResult } from 'aws-lambda';
import { headers } from '../../headers';
import { getProductsAvailableList } from '../repo/getProductsAvailableList';

export const main = async (): Promise<APIGatewayProxyResult> => {
	try {
		console.log('Fetching for available products list...');
		const products = await getProductsAvailableList();
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
