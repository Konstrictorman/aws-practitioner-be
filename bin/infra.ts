#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ProductApiStack } from '../lib/product-api-stack';

const app = new cdk.App();

const env = {
	account: '448049832395',
	region: 'us-east-1',
};

new ProductApiStack(app, 'ProductApiStack', {
	env: env,
});
