import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../models/IComments.tsx";
import {loadComments} from "./CommentThunck.tsx";


type commentSliceType = {
    comments:IComment[],
    loadState:boolean,
}// Описує тип стану commentSlice
// comments масив об'єктів типу IComment
// loadState логічне значення, яке показує стан завантаження коментарів

const initisialState:commentSliceType={comments:[],loadState:false} // Створює початковий стан commentSlice
export const commentSlice = createSlice({
    name:"commentSlice",// Встановлює назву слайсу для ідентифікації
    initialState:initisialState, // Встановлює початковий стан slice
    // Місце для синхронних reducer-функцій
    reducers:{},
    // Місце для асихроних функцій
    extraReducers:builder => builder
        // Метод виконується якщо результат loadComments є успішним і оновлює відповідні дані
        .addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>)=>{
            // state поточний стан commentSlice
            // action action з результатом виконання loadComments
            // PayloadAction<IComment[]> означає, що payload містить масив об'єктів IComment
            state.comments = action.payload
            // Записує отриманий з API масив коментарів у state.comments
        })
        // Метод виконується якщо результат loadComments є не успішним
        .addCase(loadComments.rejected, (state, action)=>{
            // state поточний стан commentSlice
            // action action, який містить інформацію про помилку
            console.log(state)
            console.log(action)
        })
        //  Перевіряє чи результат loadComments є успішним
        // Якщо loadComments має статус fulfilled, виконується ця функція
        .addMatcher(isFulfilled(loadComments),(state)=>{
            state.loadState=true;
        })
        // Перевіряє чи результат loadComments є не успішним
        // Якщо loadComments має статус rejected, виконується ця функція
        .addMatcher(isRejected(loadComments),(state)=>{
            console.log(state);
        })
});
// Створює об'єкт з actions для роботи з commentSlice
export const commentSliceActions = {
    // Додає до об'єкта всі синхронні actions, створені через reducers
    // Додає асинхронний thunk loadComments щоб його можна було викликати через commentSliceActions
    ...commentSlice.actions,loadComments
}