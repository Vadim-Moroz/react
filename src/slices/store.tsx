import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./usersSlice/UserSlice.tsx";
import {postSlice} from "./postSlice/PostSlice.tsx";
import {commentSlice} from "./commentSlice/CommentSlice.tsx";
// Створює спільний store для застосунку
export const store = configureStore({
    // Визначає які частини будуть зберігатися у store
    reducer:{
        // зберігає список користувачів і обробляє відповідні зміни стану.
        userSlice:userSlice.reducer,
        // зберігає список постів і обробляє відповідні зміни стану.
        postSlice:postSlice.reducer,
        // зберігає список коментарів і обробляє відповідні зміни стану.
        commentSlice:commentSlice.reducer
    }
})