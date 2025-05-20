import { mockProducts } from '../../lib/data/products';

export async function main() {
	return {
		statusCode: 200,
		body: JSON.stringify(mockProducts),
		headers: {
			'Content-Type': 'application/json',
		},
	};
}
