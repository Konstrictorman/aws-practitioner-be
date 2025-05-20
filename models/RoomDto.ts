import { Example } from 'tsoa';

/**
 * Room DTO for Swagger documentation
 */
export class RoomDto {
	@Example('d1b1c220-001')
	id!: string;

	@Example('R001')
	roomNumber!: string;

	@Example('Single City View')
	title!: string;

	@Example('SINGLE')
	roomType!: 'SINGLE' | 'DOUBLE';

	@Example(1)
	capacity!: number;

	@Example(85.0)
	price!: number;

	@Example('Cozy single room with a view of the skyline.')
	description!: string;

	@Example('New York, USA')
	location!: string;
}
