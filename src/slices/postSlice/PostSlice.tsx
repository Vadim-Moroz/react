import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {loadPosts} from "./PostThunk.tsx";
import type {IPost} from "../../models/IPosts.tsx";

type postSliceType = {
    posts:IPost[],
    loadState:boolean,
}// Описує тип стану postSlice
// posts масив об'єктів типу IPost
// loadState логічне значення, яке показує стан завантаження постів

const initisialState:postSliceType={posts:[],loadState:false}// Створює початковий стан postSlice
export const postSlice = createSlice({
    name:"postSlice",// Встановлює назву слайсу для ідентифікації
    initialState:initisialState,// Встановлює початковий стан slice
    // Місце для синхронних reducer-функцій
    reducers:{},
    // Місце для асихроних функцій
    extraReducers:builder => builder
        // Метод виконується якщо результат loadPosts є успішним і оновлює відповідні дані
        .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>)=>{
            // state поточний стан postSlice
            // action action з результатом виконання loadPosts
            // PayloadAction<IPost[]> означає, що payload містить масив об'єктів IPost
            state.posts = action.payload
            // Записує отриманий з API масив постів у state.posts
        })
        // Метод виконується якщо результат loadPosts є не успішним
        .addCase(loadPosts.rejected, (state, action)=>{
            // state поточний стан postSlice
            // action action, який містить інформацію про помилку
            console.log(state)
            console.log(action)
        })
        //  Перевіряє чи результат loadPosts є успішним
        // Якщо loadPosts має статус fulfilled, виконується ця функція
        .addMatcher(isFulfilled(loadPosts),(state)=>{
            state.loadState=true;
        })
        // Перевіряє чи результат loadPosts є не успішним
        // Якщо loadPosts має статус rejected, виконується ця функція
        .addMatcher(isRejected(loadPosts),(state)=>{
            console.log(state);
        })
});
export const postSliceActions = {
    // Створює об'єкт з actions для роботи з postSlice
    // Додає до об'єкта всі синхронні actions, створені через reducers
    // Додає асинхронний thunk loadPosts щоб його можна було викликати через postSliceActions
    ...postSlice.actions,loadPosts
}