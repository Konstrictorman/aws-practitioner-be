import { mockProducts } from '../../../data/products';
import { ProductDto } from '../../../models/ProductDto';
import { getProductsList } from './getProductsList';

export const getProductsById = async (
	productId: string
): Promise<ProductDto[] | undefined> => {
	try {
		const matches = (await getProductsList()).filter((x: ProductDto) =>
			x.id?.startsWith(productId)
		);
		return matches;
	} catch (error: any) {
		console.error(`Error while getting product by Id: ${productId}`, error);
		throw error;
	}
};
