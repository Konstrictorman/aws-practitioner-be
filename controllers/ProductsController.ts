import { Get, Route, Tags, SuccessResponse, Response, Path } from 'tsoa';
import { ProductDto } from '../models/ProductDto';
import { getProductsList } from '../services/products/repo/getProductsList';
import { getProductsById } from '../services/products/repo/getProductsById';

@Route('products')
@Tags('Products')
export class ProductsController {
	@Get('/')
	@SuccessResponse('200', 'Success')
	@Response('400', 'Bad Request')
	@Response('404', 'Products Not Found')
	public async getProductsList(): Promise<ProductDto[]> {
		const products = await getProductsList();
		return products ?? [];
	}

	@Get('{productId}')
	@SuccessResponse('200', 'Success')
	@Response('400', 'Bad Request - Missing productId')
	@Response('404', 'Product not found')
	public async getProductsById(
		@Path() productId: string
	): Promise<ProductDto[]> {
		if (!productId) {
			// Simulate throwing error for tsoa to handle as 400
			throw new Error('Missing productId parameter');
		}

		const products = await getProductsById(productId);

		if (!products || products.length === 0) {
			// Simulate throwing error for tsoa to handle as 404
			throw new Error(`No products found with id ${productId}`);
		}
		return products;
	}
}
