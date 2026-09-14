import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IProducts} from "../../model/IProducts.ts";
import {getProducts} from "../../services/api.service.tsx";
import ProductComponent from "./ProductComponent.tsx";


const ProductsComponent = () => {
    const [query]=useSearchParams()
    const [datas, setProducts] = useState<IProducts[]>([])
    useEffect(() => {
        const pg=query.get('pg')
            getProducts(pg||'1').then((AllData) => setProducts(AllData.products))
    }, [query]);
    return (
        <>
            {datas.map(data => <ProductComponent key={data.id} item={data}/>)}
        </>
    )
};

export default ProductsComponent;