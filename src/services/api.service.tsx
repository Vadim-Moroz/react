import * as axios from "axios";
import type {IUsersWithTokens} from "../models/IUsersWithTokens.tsx";
import type {IProduct} from "../models/IProducts.tsx";
import type {IProductResponseModel} from "../models/IBaseResponseModel.tsx";
import {retriveLocalStorage} from "./helpers.tsx";
import type {ITokenPair} from "../models/ITokenPair.tsx";

// Створює екземпляр Axios із базовою адресою для авторизації.
const axiosInstance= axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: {}
})

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

//Перехоплює кожне звернення до сервера
axiosInstance.interceptors.request.use((requestObject)=> {
    if(requestObject.method?.toUpperCase() === 'GET') { //Виконується лише якщо виклик GET
        requestObject.headers.Authorization = `Bearer ` + retriveLocalStorage<IUsersWithTokens>('user').accessToken // Записує в header атрибут Authorization в який записує токен доступу взятий з LocalStorage
    }
    return requestObject
})

// Передає дані користувача на сервер та при успішному запиту отримує accessToken і refreshToken
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUsersWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUsersWithTokens>('login', {username, password, expiresInMins}); // Надсилає дані для входу на сервер
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));// Записує значення токенів в localStorage
    return userWithTokens;
}
export const loadAuthProducts = async ():Promise<IProduct[]> => {
        const {data}=await axiosInstance.get<IProductResponseModel>('products') // Надсилає авторизований GET запит для отримання списку продуктів
        return  data.products
}

// Оновлення токенів
export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUsersWithTokens>('user')
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('refresh',
        {
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMins: 1
        });// Передає refreshToken та новий expiresInMins
    console.log(accessToken)
    console.log(refreshToken)
    iUserWithTokens.accessToken = accessToken; // Оновлює значення accessToken
    iUserWithTokens.refreshToken = refreshToken; // Оновлює значення refreshToken
    localStorage.setItem('user', JSON.stringify(iUserWithTokens)); // Зберігає ці значення в localStorage
}