// import type {IUsers} from "../model/IUsers.ts";
import type {ResponseIUsers} from "../model/ResponseIUsers.ts";

export const getUsers = async (query:string):Promise<ResponseIUsers> => {
    return await fetch(`https://reqres.in/api/users?page=`+query).then(res => res.json())
}