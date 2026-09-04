import {IPost} from "../model/PostModel.ts";

const baseUrlTodo = import.meta.env.VITE_API_URLTTODO + "/posts";
export const loadtodos = async ()=>{
    const response:IPost[] = await fetch(baseUrlTodo)
        .then(value => value.json())
    return response;
}