import type {ResponseIProducts} from "../model/ResponseIProducts.ts";

export const getProducts = async (page:string):Promise<ResponseIProducts> => {
    const limit=10
    const skip=limit * (+page)-limit
    return await fetch('https://dummyjson.com/products'+'?limit='+ limit + ';skip=' + skip).then(res => res.json())
}
