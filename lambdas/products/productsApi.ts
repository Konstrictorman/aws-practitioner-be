import { Product, ProductSchema } from '../../models/Product';

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

const headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*', // 👈 update this in prod
	'Access-Control-Allow-Credentials': true,
};

// Validate all mock products before returning
function validateProducts(data: unknown): Product[] {
	const validated = data as Product[];
	for (const product of validated) {
		ProductSchema.validateSync(product, { strict: true });
	}
	return validated;
}
export async function getProductsList(): Promise<any> {
	try {
		// Potentially await a DB or API call here in the future
		return {
			statusCode: 200,
			headers,
			body: JSON.stringify(mockProducts),
		};
	} catch (error: any) {
		console.error('Error in getProductsList:', error);

		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ message: 'Internal Server Error' }),
		};
	}
}

export async function getProductsById(event: any): Promise<any> {
	try {
		const productId = event.pathParameters?.productId;

		if (!productId) {
			return {
				statusCode: 400,
				headers,
				body: JSON.stringify({ message: 'Missing productId parameter' }),
			};
		}

		const matches = mockProducts.filter((x: Product) =>
			x.id?.startsWith(productId)
		);

		if (matches.length === 0) {
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
	} catch (error: any) {
		console.error('Error in getProductsById:', error);

		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ message: 'Internal Server Error' }),
		};
	}
}
