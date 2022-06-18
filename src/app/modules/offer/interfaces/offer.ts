import { User } from "./user";

export interface Offer {
    id: number;
    type: string;
    title: string;
    description: string;
    city: string;
    address: string;
    price: number;
    places: number;
    rooms: number;
    roomType: string;
    availability: boolean;
    availableFrom: Date;
    images: string[];
    user: User;
    createdDate: Date;
}
