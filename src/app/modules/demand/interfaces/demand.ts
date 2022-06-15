export interface Demand {
    id: number;
    type: string;
    title: string;
    description: string;
    city: string;
    budget: number;
    roomType: string;
    availability: boolean;
    availableFrom: Date;
}
