import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import GeneralPage from "../pages/GeneralPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",element:<MainLayout/>,children:[
            {path:"users",element:<UsersPage/>},
            {path:"posts",element:<PostsPage/>},
            {path:"comments",element:<CommentsPage/>},
            {path:"complex",element:<GeneralPage/>}
        ]
    }

])