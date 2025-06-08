import {
	APIGatewayTokenAuthorizerEvent,
	APIGatewayAuthorizerResult,
} from 'aws-lambda';

export const main = async (
	event: APIGatewayTokenAuthorizerEvent
): Promise<
	APIGatewayAuthorizerResult | { statusCode: number; body: string }
> => {
	console.log('Authorization event:', JSON.stringify(event, null, 2));
	const authHeader = event.authorizationToken;

	if (!authHeader) {
		return {
			statusCode: 401,
			body: 'Unauthorized: Authorization header missing',
		};
	}

	const [authType, encodedCredentials] = authHeader.split(' ');

	if (!authType || authType.toLowerCase() !== 'basic' || !encodedCredentials) {
		return {
			statusCode: 401,
			body: 'Unauthorized: Invalid Authorization header format',
		};
	}

	let decoded;
	try {
		decoded = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
	} catch (err) {
		return {
			statusCode: 403,
			body: 'Forbidden: Unable to decode credentials',
		};
	}

	const [username, password] = decoded.split(':');

	if (
		username === process.env.AUTH_USERNAME &&
		password === process.env.AUTH_PASSWORD
	) {
		return generatePolicy(username, 'Allow', event.methodArn);
	}

	return {
		statusCode: 403,
		body: 'Forbidden: Invalid credentials',
	};
};

// Generates an IAM policy document
function generatePolicy(
	principalId: string,
	effect: 'Allow' | 'Deny',
	resource: string
): APIGatewayAuthorizerResult {
	return {
		principalId,
		policyDocument: {
			Version: '2012-10-17',
			Statement: [
				{
					Action: 'execute-api:Invoke',
					Effect: effect,
					Resource: resource,
				},
			],
		},
	};
}
