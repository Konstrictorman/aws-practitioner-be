import { mockRooms } from '../../../data/rooms';
import { RoomDto } from '../../../models/RoomDto';

export const getRoomsList = async (): Promise<RoomDto[] | undefined> => {
	try {
		// Potentially await a DB or API call here in the future
		return mockRooms;
	} catch (error: any) {
		console.error('Error while getting rooms list', error);
		throw error;
	}
};
