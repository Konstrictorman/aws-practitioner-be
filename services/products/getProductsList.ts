import { headers } from './headers';
import { getProductsListService } from '../productsServices';

export const main = async () => {
	try {
		const products = await getProductsListService();
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
