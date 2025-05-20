/**
 * Room DTO for Swagger documentation
 */
export declare class RoomDto {
    id: string;
    roomNumber: string;
    title: string;
    roomType: 'SINGLE' | 'DOUBLE';
    capacity: number;
    price: number;
    description: string;
    location: string;
}
