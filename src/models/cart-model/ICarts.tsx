import {IProducts} from "../product-model/IProducts.tsx";


export interface ICart {
  id: number;
  products: IProducts[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}