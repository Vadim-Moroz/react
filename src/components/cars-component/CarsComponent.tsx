import {useEffect, useState} from "react";
import {getCars} from "../../services/api.service.tsx";
import CarComponent from "./CarComponent.tsx";
import type {ICars} from "../../models/ICars.tsx";

const CarsComponent = () => {
    const [cars, setCar] = useState<ICars[]>([])
    useEffect(()=>{
        getCars().then((value) => setCar(value) )
    },[])
    return (
        <div>
            {cars.map((car)=><CarComponent key={car.id} item={car}/>)}
        </div>
    );
};

export default CarsComponent;