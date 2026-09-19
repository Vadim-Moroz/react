import type {FC} from "react";
import type {ICars} from "../../models/ICars.tsx";


type CarProps ={
    item:ICars
}

const CarComponent:FC<CarProps> = ({item}) => {
    return (
        <div>
            <h3>{item.brand}</h3>
            <p>{item.year}</p>
            <hr/>
        </div>
    );
};

export default CarComponent;