import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
export declare class AuthorizationServiceStack extends Stack {
    readonly basicAuthorizer: lambda.Function;
    constructor(scope: Construct, id: string, props?: StackProps);
}
