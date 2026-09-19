import type {IProduct} from "./IProducts.tsx";

export interface IProductResponseModel {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}