// services/products/repo/createProduct.ts
import {
	DynamoDBClient,
	TransactWriteItemsCommand,
} from '@aws-sdk/client-dynamodb';
import { ProductDto } from '../../../models/ProductDto';
import crypto from 'crypto';

const client = new DynamoDBClient({ region: process.env.AWS_REGION! });

export const createProduct = async (
	product: Partial<ProductDto>
): Promise<ProductDto> => {
	try {
		// Generate a unique product ID
		const productId = crypto.randomUUID();
		const newProduct: ProductDto = {
			id: productId,
			title: product.title!,
			description: product.description!,
			price: product.price!,
			qty: product.qty ?? 0,
		};

		// Execute as a Transaction (Atomic)
		await client.send(
			new TransactWriteItemsCommand({
				TransactItems: [
					{
						Put: {
							TableName: process.env.PRODUCTS_TABLE!,
							Item: {
								id: { S: newProduct.id },
								title: { S: newProduct.title },
								description: { S: newProduct.description },
								price: { N: newProduct.price.toString() },
							},
						},
					},
					{
						Put: {
							TableName: process.env.STOCK_TABLE!,
							Item: {
								product_id: { S: newProduct.id },
								count: { N: newProduct.qty.toString() },
							},
						},
					},
				],
			})
		);

		return newProduct;
	} catch (error) {
		console.error('Error while creating product (atomic transaction):', error);
		throw new Error('Error while creating product (atomic transaction).');
	}
};
