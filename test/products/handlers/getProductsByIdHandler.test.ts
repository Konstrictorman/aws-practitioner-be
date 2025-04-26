import { main as getProductsByIdHandler } from '../../../services/products/handlers/getProductsByIdHandler';
import { APIGatewayProxyEvent } from 'aws-lambda';

describe('getProductsByIdHandler', () => {
	it('should return 400 if productId is missing', async () => {
		const mockEvent = {
			pathParameters: null,
		} as unknown as APIGatewayProxyEvent;

		const response = await getProductsByIdHandler(mockEvent);

		expect(response.statusCode).toBe(400);
		expect(JSON.parse(response.body)).toEqual({
			message: 'Missing productId parameter',
		});
	});

	it('should return 404 if no product is found', async () => {
		const mockEvent = {
			pathParameters: { productId: 'non-existing-id' },
		} as unknown as APIGatewayProxyEvent;

		const response = await getProductsByIdHandler(mockEvent);

		expect(response.statusCode).toBe(404);
		expect(JSON.parse(response.body)).toHaveProperty('message');
	});

	it('should return 200 if a product is found', async () => {
		const mockEvent = {
			pathParameters: { productId: '7567ec4b' },
		} as unknown as APIGatewayProxyEvent; // Partial ID from your mock data

		const response = await getProductsByIdHandler(mockEvent);

		expect(response.statusCode).toBe(200);
		const body = JSON.parse(response.body);
		expect(Array.isArray(body)).toBe(true);
		expect(body.length).toBeGreaterThan(0);
	});
});
