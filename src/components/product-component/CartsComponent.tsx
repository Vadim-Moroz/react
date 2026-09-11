import {useEffect, useState} from "react";
import {generalService} from "../../service/api.service.tsx";
import {urls} from "../../constants/urls.ts";
import CartComponent from "./CartComponent.tsx";
import {CartsDummyModel} from "../../models/cart-model/CartsDummy.ts";
import {ICart} from "../../models/cart-model/ICarts.tsx";
import {useParams} from "react-router-dom";

const CartsComponent = () => {
    const {id} = useParams()
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect( ()=>{
        generalService.getDataDummy <CartsDummyModel & { carts: ICart[]}>(urls.carts.AllCartsDummy+id).then((AllCarts)=>setCarts(AllCarts.carts))
    },[id]);
    return (
        <div>
            <div>{carts.map(cart => <CartComponent key={cart.id} cart={cart}/>)}</div>
        </div>
    );
};

export default CartsComponent;