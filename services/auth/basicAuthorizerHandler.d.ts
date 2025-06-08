import { APIGatewayTokenAuthorizerEvent, APIGatewayAuthorizerResult } from 'aws-lambda';
export declare const main: (event: APIGatewayTokenAuthorizerEvent) => Promise<APIGatewayAuthorizerResult | {
    statusCode: number;
    body: string;
}>;
