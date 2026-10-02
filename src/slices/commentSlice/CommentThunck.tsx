import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.tsx";
import type {IComment} from "../../models/IComments.tsx";

export const loadComments = createAsyncThunk(
    'postSlice/loadPosts',
    async (_,thunkAPI) => {
        try{
            const posts = await getAll<IComment[]>('/comments')
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(posts)
        }catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)
