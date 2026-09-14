import type {FC} from "react";
import type {IProducts} from "../../model/IProducts.ts";
type PropsType={
    item:IProducts
}
const ProductComponent:FC<PropsType> = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <img src={item.thumbnail} alt={item.title}/>
        </div>
    );
};

export default ProductComponent;