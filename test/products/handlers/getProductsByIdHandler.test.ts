import { main as getProductsByIdHandler } from '../../../services/products/handlers/getProductsByIdHandler';
import * as productsRepo from '../../../services/products/repo/getProductsById';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

describe('getProductsByIdHandler', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	const createMockEvent = (productId?: string): APIGatewayProxyEvent => ({
		body: null,
		headers: {},
		multiValueHeaders: {},
		httpMethod: 'GET',
		isBase64Encoded: false,
		path: `/products/${productId ?? ''}`,
		pathParameters: productId ? { productId } : null,
		queryStringParameters: null,
		multiValueQueryStringParameters: null,
		stageVariables: null,
		requestContext: {} as any,
		resource: '',
	});

	it('should return 200 with product if found', async () => {
		const mockProducts = [
			{
				id: '1',
				title: 'Sample Product',
				description: 'Sample Description',
				price: 50,
				qty: 21,
			},
		];

		jest.spyOn(productsRepo, 'getProductsById').mockResolvedValue(mockProducts);

		const event = createMockEvent('1');
		const result: APIGatewayProxyResult = await getProductsByIdHandler(event);

		expect(result.statusCode).toBe(200);
		expect(result.body).toEqual(JSON.stringify(mockProducts));
	});

	it('should return 400 if productId is missing', async () => {
		const event = createMockEvent(); // no productId
		const result: APIGatewayProxyResult = await getProductsByIdHandler(event);

		expect(result.statusCode).toBe(400);
		const body = JSON.parse(result.body);
		expect(body.message).toBe('Missing productId parameter');
	});

	it('should return 404 if no products found', async () => {
		jest.spyOn(productsRepo, 'getProductsById').mockResolvedValue([]);

		const event = createMockEvent('nonexistent');
		const result: APIGatewayProxyResult = await getProductsByIdHandler(event);

		expect(result.statusCode).toBe(404);
		const body = JSON.parse(result.body);
		expect(body.message).toBe(
			`No product found with ID starting with 'nonexistent'`
		);
	});

	it('should return 500 on internal error', async () => {
		jest
			.spyOn(productsRepo, 'getProductsById')
			.mockRejectedValue(new Error('Internal error'));

		const event = createMockEvent('1');
		const result: APIGatewayProxyResult = await getProductsByIdHandler(event);

		expect(result.statusCode).toBe(500);
		const body = JSON.parse(result.body);
		expect(body.message).toBe('Internal Server Error');
	});
});
