import { Product, ProductSchema } from '../models/Product';

export const mockProducts: Product[] = [
	{
		description: 'Short Product Description1',
		id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',
		price: 24,
		title: 'ProductOne',
	},
	{
		description: 'Short Product Description7',
		id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
		price: 15,
		title: 'ProductTitle',
	},
	{
		description: 'Short Product Description2',
		id: '7567ec4b-b10c-48c5-9345-fc73c48a80a3',
		price: 23,
		title: 'Product',
	},
	{
		description: 'Short Product Description4',
		id: '7567ec4b-b10c-48c5-9345-fc73348a80a1',
		price: 15,
		title: 'ProductTest',
	},
	{
		description: 'Short Product Descriptio1',
		id: '7567ec4b-b10c-48c5-9445-fc73c48a80a2',
		price: 23,
		title: 'Product2',
	},
	{
		description: 'Short Product Description7',
		id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',
		price: 15,
		title: 'ProductName',
	},
];

export async function getProductsListService(): Promise<Product[] | undefined> {
	try {
		// Potentially await a DB or API call here in the future
		return mockProducts;
	} catch (error: any) {
		console.error('Error while getting products list', error);
		throw error;
	}
}

export async function getProductsByIdService(
	productId: string
): Promise<Product[] | undefined> {
	try {
		const matches = mockProducts.filter((x: Product) =>
			x.id?.startsWith(productId)
		);
		return matches;
	} catch (error: any) {
		console.error(`Error while getting product by Id: ${productId}`, error);
		throw error;
	}
}
