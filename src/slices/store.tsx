import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./usersSlice/UserSlice.tsx";
import {postSlice} from "./postSlice/PostSlice.tsx";
import {commentSlice} from "./commentSlice/CommentSlice.tsx";

export const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer,
        commentSlice:commentSlice.reducer
    }
})