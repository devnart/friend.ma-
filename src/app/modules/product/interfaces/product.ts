import { User } from "../../offer/interfaces/user";

export interface Product {
        id: number;
        user: User;
        price: number;
        city: string;
        availability: boolean;
        availableFrom: Date;
        type: string;
        createdDate: Date;

}
