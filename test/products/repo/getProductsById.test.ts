import { getProductsById } from '../../../services/products/repo/getProductsById';

describe('getProductsById', () => {
	it('should return products matching a valid partial id', async () => {
		const products = await getProductsById('7567ec4b'); // assuming based on your mock data

		expect(Array.isArray(products)).toBe(true);
		expect(products!.length).toBeGreaterThan(0);

		// Validate that all results start with the given productId
		for (const product of products!) {
			expect(product.id).not.toBeUndefined();
			expect(product.id?.startsWith('7567ec4b')).toBe(true);
		}
	});

	it('should return an empty array if no products match', async () => {
		const products = await getProductsById('nonexistent-id');

		expect(Array.isArray(products)).toBe(true);
		expect(products!.length).toBe(0);
	});

	it('should not throw an error if productId is missing', async () => {
		const products = await getProductsById('');

		expect(Array.isArray(products)).toBe(true);
	});
});
