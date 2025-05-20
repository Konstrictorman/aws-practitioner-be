import {
	BatchGetItemCommand,
	BatchGetItemCommandOutput,
	DynamoDBClient,
	ScanCommand,
	ScanCommandOutput,
} from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { ProductDto } from '../../../models/ProductDto';

const client = new DynamoDBClient({ region: process.env.AWS_REGION });

export const getProductsList = async (): Promise<ProductDto[]> => {
	try {
		// Step 1: Scan Products Table
		const productResult: ScanCommandOutput = await client.send(
			new ScanCommand({
				TableName: process.env.PRODUCTS_TABLE!,
				ProjectionExpression: 'id, title, description, price',
			})
		);

		// If no products, return an empty array
		if (!productResult.Items || productResult.Items.length === 0) {
			return [];
		}

		// Step 2: Extract Product IDs
		const productIds = productResult.Items.map((item) => unmarshall(item).id);

		// Step 3: Batch Get Stock for Products
		const stockKeys = productIds.map((id) => ({ product_id: { S: id } }));
		const stockResult: BatchGetItemCommandOutput = await client.send(
			new BatchGetItemCommand({
				RequestItems: {
					[process.env.STOCK_TABLE!]: {
						Keys: stockKeys,
					},
				},
			})
		);

		// Step 4: Map stock quantities to product IDs
		const stockItems = stockResult.Responses?.[process.env.STOCK_TABLE!] ?? [];
		const stockMap = new Map<string, number>();

		stockItems.forEach((item) => {
			const stock = unmarshall(item);
			stockMap.set(stock.product_id, stock.count || 0);
		});

		// Step 5: Map Products with their Stock Quantities
		const products: ProductDto[] = productResult.Items.map((item) => {
			const product = unmarshall(item);
			return {
				id: product.id as string,
				title: product.title as string,
				description: product.description as string,
				price: product.price as number,
				qty: stockMap.get(product.id) || 0, // Stock count or 0 if not found
			};
		});

		return products;
	} catch (error: any) {
		console.error('Error while getting products list:', error);
		throw new Error('Error while retrieving products list.');
	}
};
