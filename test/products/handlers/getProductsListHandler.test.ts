import { main as getProductsListHandler } from '../../../services/products/handlers/getProductsListHandler';

describe('getProductsListHandler', () => {
	it('should return 200 and a list of products', async () => {
		const response = await getProductsListHandler();

		expect(response.statusCode).toBe(200);
		expect(response.headers).toBeDefined();
		expect(response.body).toBeDefined();

		const body = JSON.parse(response.body);
		expect(Array.isArray(body)).toBe(true);
		expect(body.length).toBeGreaterThan(0); // assuming your mock data is not empty
	});
});
