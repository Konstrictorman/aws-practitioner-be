import { Example } from 'tsoa';

/**
 * Product DTO for Swagger documentation
 */
export class ProductDto {
	@Example('7567ec4b-b10c-48c5-9345-fc73c48a80aa')
	id!: string;

	@Example('Toy Product')
	title!: string;

	@Example('A fun toy product description.')
	description!: string;

	@Example(19.99)
	price!: number;

	@Example(10)
	qty!: number;
}
