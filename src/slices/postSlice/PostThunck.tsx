import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.tsx";
import type {IPost} from "../../models/IPosts.tsx";

// Створює thunk для отримання постів з API
export const loadPosts = createAsyncThunk(
    // Визначає унікальний тип action для операції завантаження постів
    'postSlice/loadPosts',
    // Виконує асинхроний запит
    // перше значення _ , тому що thunk не приймає вхідні дані
    // thunkAPI дає конфігурацію для виконання thunk
    async (_,thunkAPI) => {
        try{
            // Викликає getAll передаючи ній тип даних IPost[] вказуючи що результат має бути масивом постів
            const posts = await getAll<IPost[]>('/posts')
            // Якщо результат успішний повертає отриманий масив постів
            return thunkAPI.fulfillWithValue(posts)
        }catch(e){// Якщо виникає помилка catch її перехоплює
            // та повертає інформацію про неї
            return thunkAPI.rejectWithValue(e)
        }
    }
)
