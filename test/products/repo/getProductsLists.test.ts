import { getProductsList } from '../../../services/products/repo/getProductsList';

describe('getProductsList', () => {
	it('should return a non-empty array of products', async () => {
		const products = await getProductsList();

		expect(Array.isArray(products)).toBe(true);
		expect(products).toBeDefined();
		expect(products!.length).toBeGreaterThan(0);

		// Optional: check fields of first product
		const firstProduct = products![0];
		expect(firstProduct).toHaveProperty('id');
		expect(firstProduct).toHaveProperty('title');
		expect(firstProduct).toHaveProperty('price');
	});
});
