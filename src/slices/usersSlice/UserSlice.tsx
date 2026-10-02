import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import { loadUsers} from "./UserThunck.tsx";
import type {IUser} from "../../models/IUsers.tsx";

type userSliceType = {
    users:IUser[],
    loadState:boolean,
}

const initisialState:userSliceType={users:[],loadState:false}
export const userSlice = createSlice({
    name:"userSlice",
    initialState:initisialState,
    reducers:{
        changeLoadState:(state,action)=>{
            state.loadState=action.payload
        }
    },
    extraReducers:builder => builder
        .addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>)=>{
            state.users = action.payload
        })
        .addCase(loadUsers.rejected, (state, action)=>{
            console.log(state)
            console.log(action)
        })
        .addMatcher(isFulfilled(loadUsers),(state)=>{
            state.loadState=true;
        })
        .addMatcher(isRejected(loadUsers),(state)=>{
            console.log(state);
        })
});
export const userSliceActions = {
    ...userSlice.actions,loadUsers
}