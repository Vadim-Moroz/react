import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.tsx";
import type {IUser} from "../../models/IUsers.tsx";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_,thunkAPI) => {
        try{
            const users = await getAll<IUser[]>('/users')
            // thunkAPI.dispatch(userSliceActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users)
        }catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)
