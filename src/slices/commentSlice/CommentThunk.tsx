import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.tsx";
import type {IComment} from "../../models/IComments.tsx";

// Створює thunk для отримання коментарі з API
export const loadComments = createAsyncThunk(
    // Визначає унікальний тип action для операції завантаження коментарів
    'commentSlice/loadComments',
    // Виконує асинхроний запит
    // перше значення _ , тому що thunk не приймає вхідні дані
    // thunkAPI дає конфігурацію для виконання thunk
    async (_,thunkAPI) => {
        try{
            // Викликає getAll передаючи ній тип даних IComment[] вказуючи що результат має бути масивом коментарів
            const comments = await getAll<IComment[]>('/comments')
            // Якщо результат успішний повертає отриманий масив коментарів
            return thunkAPI.fulfillWithValue(comments)
        } catch(e){ // Якщо виникає помилка catch її перехоплює
            // та повертає інформацію про неї
            return thunkAPI.rejectWithValue(e)
        }
    }
)
