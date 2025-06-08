import { main as getProductsListHandler } from '../../../services/products/handlers/getProductsListHandler';
import * as productsRepo from '../../../services/products/repo/getProductsList';
import { APIGatewayProxyResult } from 'aws-lambda';

describe('getProductsListHandler', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should return 200 with product list on success', async () => {
		const mockProducts = [
			{
				id: '1',
				title: 'Sample Product',
				description: 'Sample Description',
				price: 99.99,
				qty: 32,
			},
		];

		jest.spyOn(productsRepo, 'getProductsList').mockResolvedValue(mockProducts);

		const result: APIGatewayProxyResult = await getProductsListHandler();

		expect(result.statusCode).toBe(200);
		expect(result.headers!['Content-Type']).toBe('application/json');
		expect(result.body).toEqual(JSON.stringify(mockProducts));
	});

	it('should return 500 if an error occurs', async () => {
		jest
			.spyOn(productsRepo, 'getProductsList')
			.mockRejectedValue(new Error('Database error'));

		const result: APIGatewayProxyResult = await getProductsListHandler();

		expect(result.statusCode).toBe(500);
		expect(result.headers!['Content-Type']).toBe('application/json');

		const parsedBody = JSON.parse(result.body);
		expect(parsedBody).toHaveProperty('message', 'Internal Server Error');
	});
});
