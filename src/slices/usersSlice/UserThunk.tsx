import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.tsx";
import type {IUser} from "../../models/IUsers.tsx";

// Створює thunk для отримання користувачів з API
export const loadUsers = createAsyncThunk(
    // Визначає унікальний тип action для операції завантаження користувачів
    'userSlice/loadUsers',
    // Виконує асинхроний запит
    // перше значення _ , тому що thunk не приймає вхідні дані
    // thunkAPI дає конфігурацію для виконання thunk
    async (_,thunkAPI) => {
        try{
            // Викликає getAll передаючи ній тип даних IUser[] вказуючи що результат має бути масивом користувачів
            const users = await getAll<IUser[]>('/users')
            // Якщо результат успішний повертає отриманий масив користувачів
            return thunkAPI.fulfillWithValue(users)
        }catch(e){// Якщо виникає помилка catch її перехоплює
            // та повертає інформацію про неї
            return thunkAPI.rejectWithValue(e)
        }
    }
)
