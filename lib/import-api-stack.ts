import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3n from 'aws-cdk-lib/aws-s3-notifications';
import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as iam from 'aws-cdk-lib/aws-iam';

export class ImportApiStack extends Stack {
	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		const bucketName = `app-store-bucket-${this.account}-${this.region}`;

		// Validate that BUCKET_NAME is defined
		if (!bucketName) {
			throw new Error('BUCKET_NAME environment variable must be defined');
		}

		// Create S3 bucket with a fixed ID and dynamic bucket name
		const bucket = new s3.Bucket(this, '_appStoreBucket', {
			bucketName: bucketName,
			versioned: true,
			removalPolicy: cdk.RemovalPolicy.DESTROY, // Only for development
			autoDeleteObjects: true, // Cleanup automatically in development
		});

		// Lambda function to process uploaded files
		// [GET] /import
		const importProductsFile = new lambda.Function(this, 'importProductsFile', {
			functionName: 'GetImportProductFileLambdaFunction',
			code: lambda.Code.fromAsset(path.join(__dirname, '../dist/handlers/')),
			handler: 'importProductsFileHandler.main',
			runtime: lambda.Runtime.NODEJS_18_X,
			timeout: Duration.seconds(30),
			environment: {
				BUCKET_NAME: bucket.bucketName,
			},
		});

		const importFileParser = new lambda.Function(this, 'importFileParser', {
			functionName: 'GetImportFileParserLambdaFunction',
			code: lambda.Code.fromAsset(path.join(__dirname, '../dist/handlers/')),
			handler: 'importFileParserHandler.main',
			runtime: lambda.Runtime.NODEJS_18_X,
			timeout: Duration.seconds(30),
			environment: {
				BUCKET_NAME: bucket.bucketName,
			},
		});

		// Grant the Lambda function read access to the bucket
		bucket.grantReadWrite(importProductsFile);
		bucket.grantReadWrite(importFileParser);

		// Add S3 event notification for uploads in "upload/" folder
		bucket.addEventNotification(
			s3.EventType.OBJECT_CREATED_PUT,
			new s3n.LambdaDestination(importFileParser),
			{ prefix: 'upload/' } // Only trigger for the "upload/" folder
		);

		const api = new apigateway.RestApi(this, 'Import-end-point', {
			restApiName: 'Toy Store Gateway [Upload Files]',
			description: 'This API serves the Lambda functions for uploading files.',
		});

		const importResource = api.root.addResource('import');
		importResource.addMethod(
			'GET',
			new apigateway.LambdaIntegration(importProductsFile)
		);
	}
}
