import { mockProducts } from '../../../data/products';
import { Product } from '../../../models/Product';

export const getProductsList = async (): Promise<Product[] | undefined> => {
	try {
		// Potentially await a DB or API call here in the future
		return mockProducts;
	} catch (error: any) {
		console.error('Error while getting products list', error);
		throw error;
	}
};
