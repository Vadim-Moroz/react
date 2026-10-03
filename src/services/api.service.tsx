import * as axios from "axios";
import type {IUsersWithTokens} from "../models/IUsersWithTokens.tsx";
import type {IProduct} from "../models/IProducts.tsx";
import type {IProductResponseModel} from "../models/IBaseResponseModel.tsx";
import {retriveLocalStorage} from "./helpers.tsx";
import type {ITokenPair} from "../models/ITokenPair.tsx";

// Створює екземпляр Axios із базовою адресою для авторизації щоб не дублювати базову адресу сервера в кожному запиті
const axiosInstance= axios.create({
    baseURL: 'https://dummyjson.com/auth/',
    headers: {}
})

// Описує дані, які необхідно передати серверу для виконання авторизації
type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
}

//Перехоплює кожне звернення до сервера
axiosInstance.interceptors.request.use((requestObject)=> {
    //Виконується лише якщо виклик GET оскільки саме захищені GET-запити потребують авторизації
    // Запит login виконується для отримання токенів, на цьому етапі ще немає accessToken, а запит refresh використовує refreshToken для отримання нової пари токенів.
    if(requestObject.method?.toUpperCase() === 'GET') {
        // Записує в header атрибут Authorization в який записує accessToken взятий з LocalStorage
        requestObject.headers.Authorization = `Bearer ` + retriveLocalStorage<IUsersWithTokens>('user').accessToken }
    // Повертає змінений об'єкт, щоб Axios продовжив його обробку та відправив запит на сервер
    return requestObject
})

// Передає дані користувача на сервер та при успішному запиту отримує дані користувача та accessToken і refreshToken
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUsersWithTokens> => {
    // Надсилає post-запит для входу на сервер
    // Деструктуризує {username, password, expiresInMins} для отримання потрібних властивостей
    // Дженерик <IUsersWithTokens> вказує Axios, що data у відповіді має структуру, описану інтерфейсом IUsersWithTokens
    // {data: userWithTokens} перейменовує властивість data у змінну userWithTokens
    const {data: userWithTokens} = await axiosInstance.post<IUsersWithTokens>('login', {username, password, expiresInMins});
    console.log(userWithTokens);
    // Перетворює об'єкт userWithTokens у JSON-рядок для запису значення токенів в localStorage за ключем user
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}
// Повертає масив продуктів типу IProduct.
export const loadAuthProducts = async ():Promise<IProduct[]> => {
    // Надсилає авторизований GET запит для отримання products
    // Дженерик <IProductResponseModel> вказує, що властивість data у відповіді має структуру IProductResponseModel.
    const {data}=await axiosInstance.get<IProductResponseModel>('products')
    return  data.products // Витягає products з data і повертає них
}

// Оновлення токенів
export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUsersWithTokens>('user') // Отримує пару токенів
    // Отримує оновлені дані користувача,
    // Деструктуризує data щоб витягти accessToken, refreshToken
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('refresh',
        {// Передає refreshToken для оновлення та новий expiresInMins
            refreshToken: iUserWithTokens.refreshToken,
            expiresInMins: 1
        });
    console.log(accessToken)
    console.log(refreshToken)
    iUserWithTokens.accessToken = accessToken; // Оновлює значення accessToken
    iUserWithTokens.refreshToken = refreshToken; // Оновлює значення refreshToken
    localStorage.setItem('user', JSON.stringify(iUserWithTokens)); // Перетворює значення в JSON та зберігає ці значення в localStorage
}