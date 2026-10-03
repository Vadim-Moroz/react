import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./usersSlice/UserSlice.tsx";
import {postSlice} from "./postSlice/PostSlice.tsx";
import {commentSlice} from "./commentSlice/CommentSlice.tsx";
// Створює спільний store для застосунку
export const store = configureStore({
    // Визначає які частини будуть зберігатися у store
    reducer:{
        userSlice:userSlice.reducer,
        postSlice:postSlice.reducer,
        commentSlice:commentSlice.reducer
    }
})