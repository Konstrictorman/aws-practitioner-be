// services/products/handlers/createProduct.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { headers } from '../../headers';
import { createProduct } from '../repo/createProduct';
import { ProductDto } from '../../../models/ProductDto';

export const main = async (
	event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
	try {
		// Log the full event for debugging
		console.log('Raw Event:', JSON.stringify(event, null, 2));
		console.log('Raw Event Body:', event.body);

		// Detect if this is a Proxy or Non-Proxy request
		const isProxy = typeof event.body === 'string';

		let requestBody;
		try {
			// Parse the product data from the request body (for Proxy)
			requestBody = isProxy ? JSON.parse(event.body || '{}') : event;
		} catch (err) {
			console.error('Error parsing request body:', err);
			return {
				statusCode: 400,
				headers,
				body: JSON.stringify({ message: 'Invalid JSON in request body' }),
			};
		}

		console.log('Parsed Request Body:', requestBody);

		// Ensure the body is properly parsed and has the required fields
		const product: Partial<ProductDto> = {
			title: requestBody.title,
			description: requestBody.description,
			price:
				typeof requestBody.price === 'string'
					? parseFloat(requestBody.price)
					: requestBody.price,
			qty:
				typeof requestBody.qty === 'string'
					? parseInt(requestBody.qty)
					: requestBody.qty ?? 0,
		};

		console.log(
			'Product Object after Parsing:',
			JSON.stringify(product, null, 2)
		);

		// Validate the required fields
		if (!product.title || !product.description || !product.price) {
			console.error('Validation Error - Missing required fields');
			return {
				statusCode: 400,
				headers,
				body: JSON.stringify({
					message:
						'Missing required fields. Make sure to provide title, description, and price.',
				}),
			};
		}

		// Create the product
		const createdProduct = await createProduct(product);

		// Return the created product
		return {
			statusCode: 201,
			headers,
			body: JSON.stringify({ data: createdProduct.id }),
		};
	} catch (error) {
		console.error('Error creating product:', error);
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({ message: 'Internal Server Error' }),
		};
	}
};
