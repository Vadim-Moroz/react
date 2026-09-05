import "./ProductComponents.css"
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import {useEffect, useState} from "react";
import {loadtodos} from "../../service/api.ts";
import {IProduct} from "../../model/ProductModel.ts";
export const ProductComponents = () => {
    const [product, setComment] = useState<IProduct[]>([]);
    useEffect(() => {
        loadtodos().then(value => setComment(value))

    }, []);

    return (
        <div>
            {product.map((product:IProduct)=>{
                    return <ProductComponent product={product} key={product.id}></ProductComponent>;
                })
            }
        </div>
    );
};