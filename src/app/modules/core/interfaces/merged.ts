import { User } from "../../offer/interfaces/user";

export interface Merged {
    id: number;
    user: User;
    price: number;
    availability: boolean;
    availableFrom: Date;
    type: string;
    createdDate: Date;
}
