import {
	BatchGetItemCommand,
	BatchGetItemCommandOutput,
	DynamoDBClient,
	ScanCommand,
	ScanCommandOutput,
} from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { ProductDto } from '../../../models/ProductDto';

const client = new DynamoDBClient(process.env.AWS_REGION!);

export const getProductsAvailableList = async (): Promise<ProductDto[]> => {
	try {
		// Scan Stock Table for items with count > 0
		const stockResult: ScanCommandOutput = await client.send(
			new ScanCommand({
				TableName: 'Stock',
				FilterExpression: '#cnt > :minStock',
				ExpressionAttributeNames: {
					'#cnt': 'count', // Use alias for the reserved keyword 'count'
				},
				ExpressionAttributeValues: {
					':minStock': { N: '0' },
				},
			})
		);

		// If no stock items, return an empty array
		if (!stockResult.Items || stockResult.Items.length === 0) {
			return [];
		}

		// Extract Product IDs from Stock Table (with stock > 0)
		const productIds = stockResult.Items.map(
			(item) => unmarshall(item).product_id
		);

		// Extract Product IDs and Quantities from Stock Table
		const stockItems = stockResult.Items.map((item) => unmarshall(item));
		const stockMap: Record<string, number> = {};
		stockItems.forEach((item) => {
			stockMap[item.product_id] = item.count;
		});

		// Fetch Products using BatchGetItemCommand
		const productKeys = productIds.map((id) => ({ id: { S: id } }));

		const productsResult: BatchGetItemCommandOutput = await client.send(
			new BatchGetItemCommand({
				RequestItems: {
					[process.env.PRODUCTS_TABLE!]: {
						Keys: productKeys,
					},
				},
			})
		);

		// If no products are found, return an empty array
		const products =
			productsResult.Responses?.[process.env.PRODUCTS_TABLE!] ?? [];

		// Unmarshall Products
		const availableProducts: ProductDto[] = products.map((item) => {
			const unmarshalledItem = unmarshall(item);
			return {
				id: unmarshalledItem.id as string,
				title: unmarshalledItem.title as string,
				description: unmarshalledItem.description as string,
				price: unmarshalledItem.price as number,
				qty: stockMap[unmarshalledItem.id] || 0,
			};
		});

		return availableProducts;
	} catch (error: any) {
		console.error('Error while getting products list', error);
		throw error;
	}
};
