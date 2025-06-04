#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ProductApiStack } from '../lib/product-api-stack';
import { ImportApiStack } from '../lib/import-api-stack';
import { ProductSqsStack } from '../lib/product-sqs-stack';
// Load environment variables from .env file
// import * as dotenv from 'dotenv';
// dotenv.config();

const app = new cdk.App();

const env = {
	account: process.env.AWS_ACCOUNT_ID!,
	region: process.env.AWS_REGION!,
};

new ProductApiStack(app, 'ProductApiStack', {
	env: env,
});

new ImportApiStack(app, 'ImportApiStack', {
	env: env,
});
