import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import { loadUsers} from "./UserThunck.tsx";
import type {IUser} from "../../models/IUsers.tsx";

type userSliceType = {
    users:IUser[],
    loadState:boolean,
}// Описує тип стану userSlice
// users масив об'єктів типу IUser
// loadState логічне значення, яке показує стан завантаження користувачів

const initisialState:userSliceType={users:[],loadState:false}// Створює початковий стан userSlice
export const userSlice = createSlice({
    name:"userSlice",// Встановлює назву userSlice для userSlice
    initialState:initisialState,// Встановлює початковий стан slice
    // Місце для синхронних reducer-функцій
    reducers:{
        // Синхрона функція зміни стану
        changeLoadState:(state,action)=>{
            // state поточний стан userSlice
            // action містить нове значення для loadState
            state.loadState=action.payload // Змінює значення loadState на значення передане в payload action
        }
    },
    // Місце для асихроних функцій
    extraReducers:builder => builder
        // Метод виконується якщо результат loadUsers є успішним і оновлю відповідні дані
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
            // state поточний стан userSlice
            // action action з результатом виконання loadUsers
            // PayloadAction<IUser[]> означає, що payload містить масив об'єктів IUser
            state.users = action.payload
            // Записує отриманий з API масив постів у state.users
        })
        // Метод виконується якщо результат loadUsers є не успішним
        .addCase(loadUsers.rejected, (state, action)=>{
            // state поточний стан userSlice
            // action action, який містить інформацію про помилку
            console.log(state)
            console.log(action)
        })
        //  Перевіряє чи результат loadUsers є успішним
        // Якщо loadUsers має статус fulfilled, виконується ця функція
        .addMatcher(isFulfilled(loadUsers),(state)=>{
            state.loadState=true;
        })
        // Перевіряє чи результат loadUsers є не успішним
        // Якщо loadUsers має статус rejected, виконується ця функція
        .addMatcher(isRejected(loadUsers),(state)=>{
            console.log(state);
        })
});
export const userSliceActions = {
    // Створює об'єкт з actions для роботи з userSlice
    // Додає до об'єкта всі синхронні actions, створені через reducers
    // Додає асинхронний thunk loadUsers щоб його можна було викликати через userSliceActions
    ...userSlice.actions,loadUsers
}