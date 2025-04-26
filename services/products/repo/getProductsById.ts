import { mockProducts } from '../../../data/products';
import { Product } from '../../../models/Product';

export const getProductsById = async (
	productId: string
): Promise<Product[] | undefined> => {
	try {
		const matches = mockProducts.filter((x: Product) =>
			x.id?.startsWith(productId)
		);
		return matches;
	} catch (error: any) {
		console.error(`Error while getting product by Id: ${productId}`, error);
		throw error;
	}
};
