import {createSlice, isFulfilled, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import {loadPosts} from "./PostThunck.tsx";
import type {IPost} from "../../models/IPosts.tsx";

type postSliceType = {
    posts:IPost[],
    loadState:boolean,
}

const initisialState:postSliceType={posts:[],loadState:false}
export const postSlice = createSlice({
    name:"postSlice",
    initialState:initisialState,
    reducers:{
        changeLoadState:(state,action)=>{
            state.loadState=action.payload
        }
    },
    extraReducers:builder => builder
        .addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>)=>{
            state.posts = action.payload
        })
        .addCase(loadPosts.rejected, (state, action)=>{
            console.log(state)
            console.log(action)
        })
        .addMatcher(isFulfilled(loadPosts),(state)=>{
            state.loadState=true;
        })
        .addMatcher(isRejected(loadPosts),(state)=>{
            console.log(state);
        })
});
export const postSliceActions = {
    ...postSlice.actions,loadPosts
}