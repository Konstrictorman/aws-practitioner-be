import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class ProductApiStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		const getProductsList = new lambda.Function(this, 'getProductsList', {
			code: lambda.Code.fromAsset(path.join(__dirname, '../lambdas/products/')),
			handler: 'productsApi.getProductsList',
			runtime: lambda.Runtime.NODEJS_18_X,
			memorySize: 1024,
			timeout: Duration.seconds(5),
		});

		const getProductById = new lambda.Function(this, 'getProductById', {
			code: lambda.Code.fromAsset(path.join(__dirname, '../lambdas/products/')),
			handler: 'productsApi.getProductsById',
			runtime: lambda.Runtime.NODEJS_18_X,
			memorySize: 1024,
			timeout: Duration.seconds(5),
		});

		const api = new apigateway.RestApi(this, 'Products-end-point', {
			restApiName: 'Toy Store Gateway [Products]',
			description: 'This API serves the Lambda functions for products.',
		});

		const lambdaIntegration = new apigateway.LambdaIntegration(
			getProductsList,
			{}
		);

		const productsResource = api.root.addResource('products');
		const productByIdResource = productsResource.addResource('{productId}');

		productsResource.addCorsPreflight({
			allowOrigins: ['*'], // 👈 or ['https://your-frontend.com'] in prod
			allowMethods: ['GET'], // or ['GET', 'POST', 'OPTIONS']
		});

		productByIdResource.addCorsPreflight({
			allowOrigins: ['*'],
			allowMethods: ['GET'],
		});

		productsResource.addMethod('GET', lambdaIntegration);
		productByIdResource.addMethod(
			'GET',
			new apigateway.LambdaIntegration(getProductById)
		);
	}
}
