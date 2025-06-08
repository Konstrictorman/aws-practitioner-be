import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';

export class AuthorizationServiceStack extends Stack {
	public readonly basicAuthorizer: lambda.Function;

	constructor(scope: Construct, id: string, props?: StackProps) {
		super(scope, id, props);

		this.basicAuthorizer = new lambda.Function(this, 'basicAuthorizer', {
			functionName: 'BasicAuthorizerLambdaFunction',
			code: lambda.Code.fromAsset(path.join(__dirname, '../dist/handlers/')),
			handler: 'basicAuthorizerHandler.main',
			runtime: lambda.Runtime.NODEJS_20_X,
			memorySize: 1024,
			timeout: cdk.Duration.seconds(5),
			// environment: {
			// 	AUTH_USERNAME: 'admin',
			// 	AUTH_PASSWORD: 'supersecret',
			// },
		});

		new cdk.CfnOutput(this, 'BasicAuthorizerArn', {
			value: this.basicAuthorizer.functionArn,
			exportName: 'BasicAuthorizerArn',
			description: 'ARN of the Basic Authorizer Lambda function',
		});
	}
}
