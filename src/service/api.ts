import {ITodo} from "../model/TodoModel.ts";

const baseUrlTodo = import.meta.env.VITE_API_URLTTODO + "/todos";
export const loadtodos = async ()=>{
    const response:ITodo[] = await fetch(baseUrlTodo)
        .then(value => value.json())
    return response;
}