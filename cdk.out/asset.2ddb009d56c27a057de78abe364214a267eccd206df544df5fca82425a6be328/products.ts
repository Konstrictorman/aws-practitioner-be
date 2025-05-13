import { mockProducts } from '../data/products';

export const handler = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify(mockProducts),
		headers: {
			'Content-Type': 'application/json',
		},
	};
};
