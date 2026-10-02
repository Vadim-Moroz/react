import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.tsx";
import type {IPost} from "../../models/IPosts.tsx";

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_,thunkAPI) => {
        try{
            const posts = await getAll<IPost[]>('/posts')
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(posts)
        }catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)
