import AWS from 'aws-sdk';
import { SQSEvent } from 'aws-lambda';
import { createProduct } from '../repo/createProduct';
import { ProductDto } from '../../../models/ProductDto';

const sns = new AWS.SNS();
const topicArn = process.env.PRODUCT_CREATED_TOPIC_ARN!;

export const main = async (event: SQSEvent): Promise<void> => {
	for (const record of event.Records) {
		try {
			const body = JSON.parse(record.body);

			const product: ProductDto = {
				id: body.id,
				title: body.title,
				description: body.description,
				price: body.price,
				qty:
					typeof body.count === 'number'
						? body.count
						: Math.floor(Math.random() * 501),
			};

			await createProduct(product);

			await sns
				.publish({
					TopicArn: topicArn,
					Message: `Product created: ${product.title} (ID: ${product.id}, Count: ${product.qty})`,
					Subject: 'New Product Created',
				})
				.promise();
		} catch (error) {
			console.error('Failed to process product record:', error);
		}
	}
};
