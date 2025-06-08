import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as sns from 'aws-cdk-lib/aws-sns';
export declare class ImportApiStack extends Stack {
    readonly catalogItemsQueue: sqs.Queue;
    readonly createProductTopic: sns.Topic;
    constructor(scope: Construct, id: string, props: StackProps);
}
