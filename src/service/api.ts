import {IComment} from "../model/CommentModel.ts";

const baseUrlTodo = import.meta.env.VITE_API_URLTTODO + "/comments";
export const loadtodos = async ():Promise<IComment[]> =>{
    return await fetch(baseUrlTodo)
        .then(value => value.json())

}