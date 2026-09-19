import * as axios from "axios";
import type {IUsersWithTokens} from "../models/IUsersWithTokens.tsx";
import type {IProduct} from "../models/IProducts.tsx";
import type {IProductResponseModel} from "../models/IBaseResponseModel.tsx";
import {retriveLocalStorage} from "./helpers.tsx";
import type {ITokenPair} from "../models/ITokenPair.tsx";

const axiosInstance= axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: {}
})

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

axiosInstance.interceptors.request.use((requestObject)=> {
    if(requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = `Bearer ` + retriveLocalStorage<IUsersWithTokens>('user').accessToken
    }
    return requestObject
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUsersWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUsersWithTokens>('login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}
export const loadAuthProducts = async ():Promise<IProduct[]> => {
        const {data}=await axiosInstance.get<IProductResponseModel>('products')
        return  data.products
}
export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUsersWithTokens>('user')
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('refresh',
        {
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMins: 1
        });
    console.log(accessToken)
    console.log(refreshToken)
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));

}