import type {IProducts} from "./IProducts.ts";

export type ResponseIProducts = {
  products: IProducts[];
  total: number;
  skip: number;
  limit: number;
};