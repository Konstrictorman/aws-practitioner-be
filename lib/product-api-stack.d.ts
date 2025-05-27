import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as sns from 'aws-cdk-lib/aws-sns';
interface ProductApiStackProps extends StackProps {
    catalogItemsQueue: sqs.IQueue;
    createProductTopic: sns.ITopic;
}
export declare class ProductApiStack extends Stack {
    constructor(scope: Construct, id: string, props?: ProductApiStackProps);
}
export {};
