import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class ProductApiStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		// const ProductsTable = new dynamodb.Table(this, 'Products', {
		// 	tableName: 'Products',
		// 	partitionKey: {
		// 		name: 'id',
		// 		type: dynamodb.AttributeType.STRING,
		// 	},
		// });

		// const StockTable = new dynamodb.Table(this, 'Stock', {
		// 	tableName: 'Stock',
		// 	partitionKey: {
		// 		name: 'product_id',
		// 		type: dynamodb.AttributeType.STRING,
		// 	},
		// });

		const productsTable = dynamodb.Table.fromTableName(
			this,
			'productsTable',
			'Products'
		);
		const stockTable = dynamodb.Table.fromTableName(
			this,
			'stockTable',
			'Stock'
		);

		// [GET]/products
		const getProductsList = new lambda.Function(this, 'getProductsList', {
			functionName: 'GetProductsListLambdaFunction',
			code: lambda.Code.fromAsset(path.join(__dirname, '../dist/handlers/')),
			handler: 'getProductsListHandler.main',
			runtime: lambda.Runtime.NODEJS_18_X,
			memorySize: 1024,
			timeout: Duration.seconds(5),
			environment: {
				PRODUCTS_TABLE: productsTable.tableName,
				STOCK_TABLE: stockTable.tableName,
			},
		});

		// [GET]/products/available
		const getProductsAvailableList = new lambda.Function(
			this,
			'getProductsAvailableList',
			{
				functionName: 'GetProductsAvailableListLambdaFunction',
				code: lambda.Code.fromAsset(path.join(__dirname, '../dist/handlers/')),
				handler: 'getProductsAvailableListHandler.main',
				runtime: lambda.Runtime.NODEJS_18_X,
				memorySize: 1024,
				timeout: Duration.seconds(5),
				environment: {
					PRODUCTS_TABLE: productsTable.tableName,
					STOCK_TABLE: stockTable.tableName,
				},
			}
		);

		// [GET]/products/{id}
		const getProductById = new lambda.Function(this, 'getProductById', {
			functionName: 'GetProductByIdLambdaFunction',
			code: lambda.Code.fromAsset(path.join(__dirname, '../dist/handlers/')),
			handler: 'getProductsByIdHandler.main',
			runtime: lambda.Runtime.NODEJS_18_X,
			memorySize: 1024,
			timeout: Duration.seconds(5),
			environment: {
				PRODUCTS_TABLE: productsTable.tableName,
				STOCK_TABLE: stockTable.tableName,
			},
		});

		// [POST]/products
		const createProduct = new lambda.Function(this, 'createProduct', {
			functionName: 'CreateProductLambdaFunction',
			code: lambda.Code.fromAsset(path.join(__dirname, '../dist/handlers/')),
			handler: 'createProductHandler.main',
			runtime: lambda.Runtime.NODEJS_18_X,
			memorySize: 1024,
			timeout: Duration.seconds(15),
			environment: {
				PRODUCTS_TABLE: productsTable.tableName,
				STOCK_TABLE: stockTable.tableName,
			},
		});

		// Granting Permissions to Lambda Functions
		productsTable.grantReadData(getProductsList);
		productsTable.grantReadData(getProductsAvailableList);
		productsTable.grantReadData(getProductById);
		productsTable.grantWriteData(createProduct);

		// Granting Stock Table Permissions
		stockTable.grantReadData(getProductsList);
		stockTable.grantReadData(getProductsAvailableList);
		stockTable.grantReadData(getProductById);
		stockTable.grantWriteData(createProduct);

		const api = new apigateway.RestApi(this, 'Products-end-point', {
			restApiName: 'Toy Store Gateway [Products]',
			description: 'This API serves the Lambda functions for products.',
		});

		const productsResource = api.root.addResource('products');
		productsResource.addMethod(
			'GET',
			new apigateway.LambdaIntegration(getProductsList)
		);

		productsResource.addMethod(
			'POST',
			new apigateway.LambdaIntegration(createProduct, {
				proxy: true,
			})
		);

		const productByIdResource = productsResource.addResource('{productId}');
		productByIdResource.addMethod(
			'GET',
			new apigateway.LambdaIntegration(getProductById)
		);

		const productsAvailableResource = productsResource.addResource('available');
		productsAvailableResource.addMethod(
			'GET',
			new apigateway.LambdaIntegration(getProductsAvailableList)
		);
	}
}
