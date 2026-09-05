import {IProduct} from "./ProductModel.ts";

export type ProductDummyJSON = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
};