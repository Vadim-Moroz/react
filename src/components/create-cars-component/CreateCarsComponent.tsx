import {addCars} from "../../services/api.service.tsx";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator.tsx";
import "./CreateCarsComponent.css"


interface IFromStateProps {
    brand:string;
    price:number;
    year:number
}
const customSubmit=(data: IFromStateProps)=> {
    try {
        addCars(data);

        alert("Cars added successfully.");
    } catch (error) {
        alert("Failed to add car.");
        console.error(error);
    }
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
        <div className="container">
            <form onSubmit={handleSubmit(customSubmit)}>
                <div className="form-input">
                    <input type="text" {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </div>
                <div className="form-input">
                    <input type="number" {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </div>
                <div className="form-input">
                    <input type="number" {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </div>
                <button disabled={!isValid} className="ADD">add</button>
            </form>
        </div>
    );
};

export default CreateCarsComponent;