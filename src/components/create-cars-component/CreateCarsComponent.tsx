import {addCars} from "../../services/api.service.tsx";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.tsx";


interface IFromStateProps {
    brand:string;
    price:number;
    year:number
}
const customSubmit=(data: IFromStateProps)=> {
    addCars(data)
}
const CreateCarsComponent = () => {
    const {
        handleSubmit,
        register,
        formState: { errors ,isValid}
    }=useForm<IFromStateProps>({
        mode:'all',resolver:joiResolver(carValidator)
    })
    return (
        <div>
            <form onSubmit={handleSubmit(customSubmit)}>
                <div>
                    <input type="text" {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </div>
                <div>
                    <input type="number" {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </div>
                <div>
                    <input type="number" {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </div>
                <button disabled={!isValid}>add</button>
            </form>
        </div>
    );
};

export default CreateCarsComponent;