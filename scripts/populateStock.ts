import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

// Load environment variables from .env file
dotenv.config();

// Configure AWS SDK
AWS.config.update({
	region: process.env.AWS_REGION!, // Change this to your region
});

// Initialize DynamoDB Document Client
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'Stock';

// Function to insert a stock item
const insertStockItem = async (productId: string, count: number) => {
	const params = {
		TableName: tableName,
		Item: {
			product_id: productId,
			count: count,
		},
	};

	try {
		await dynamodb.put(params).promise();
		console.log(
			`Stock inserted for Product ID: ${productId} - Count: ${count}`
		);
	} catch (error) {
		console.error('Error inserting stock item:', error);
	}
};

// Function to read products from CSV and populate stock
const populateStock = async () => {
	const filePath = path.resolve(__dirname, 'products.csv'); // Adjust path if necessary
	const products: string[] = [];

	// Read the CSV file
	fs.createReadStream(filePath)
		.pipe(csv())
		.on('data', (row) => {
			if (row.id) products.push(row.id);
		})
		.on('end', async () => {
			console.log(`Populating stock for ${products.length} products...`);

			for (const productId of products) {
				const count = Math.floor(Math.random() * 200) + 1; // Random stock count between 1 and 200
				await insertStockItem(productId, count);
			}

			console.log('Finished populating stock.');
		});
};

// Execute the main function
populateStock();
