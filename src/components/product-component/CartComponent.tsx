
import {ICart} from "../../models/cart-model/ICarts.tsx";
import {FC} from "react";
import {IProducts} from "../../models/product-model/IProducts.tsx";

type CartTypeProp = {
    cart:ICart;
};

const CartComponent:FC<CartTypeProp> = ({cart}) => {

    return (
        <div>
            <div>
                <h1>{cart.id}</h1>
                <div>{cart.products.map((products:IProducts) => <div>
                    <p>{products.id}</p>
                    <p>{products.title}</p>
                    <p>{products.price}</p>
                    <p>{products.quantity}</p>
                    <p>{products.total}</p>
                    <p>{products.discountPercentage}</p>
                    <p>{products.discountedTotal}</p>
                    <img src={products.thumbnail} alt={products.title}/>
                </div>)}</div>
            </div>
        </div>
    );
};

export default CartComponent;