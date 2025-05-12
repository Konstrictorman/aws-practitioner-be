import { APIGatewayProxyResult } from 'aws-lambda';
import { headers } from '../../headers';
import { getRoomsList } from '../repo/getRoomsList';

export const main = async (): Promise<APIGatewayProxyResult> => {
	try {
		const products = await getRoomsList();
		return {
			statusCode: 200,
			headers,
			body: JSON.stringify(products),
		};
	} catch (error) {
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ message: 'Internal Server Error' }),
		};
	}
};
