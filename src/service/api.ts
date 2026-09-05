import {IProduct} from "../model/ProductModel.ts";
import {ProductDummyJSON} from "../model/ProductDummyJSON.ts";

const baseUrlTodo = import.meta.env.VITE_API_URLTTODO + "/products";
export const loadtodos = async ():Promise<IProduct[]> =>{
    const response:ProductDummyJSON = await fetch(baseUrlTodo)
        .then(value => value.json())
    return response.products;
}