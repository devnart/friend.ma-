import { Product } from "../../product/interfaces/product";

export interface Pageable {
    content: Product[];
    first: boolean;
    empty: boolean;
    last: boolean;
    number: number;
    size: number;
    totalPages: number;
    totalElements: number;
}
