import * as axios from "axios";
import type {ICars} from "../models/ICars.tsx";

const axiosIntance = axios.create({
    baseURL:'http://bigbird.space/carsAPI/v1/',
    headers:{'Content-Type':'application/json'},
})
export const getCars=async ():Promise<ICars[]>=>{
    const axiosResponse= await axiosIntance.get("cars")
    return axiosResponse.data;
}
export const addCars=async (car:ICars)=>{
    await axiosIntance.post("cars",car)
}