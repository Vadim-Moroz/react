import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";
import {InfoUsersDummy, InfoUsersJson} from "../components/user-component/InfoUsersComponent.tsx";
import {InfoPostsDummy, InfoPostsJson} from "../components/post-component/InfoPostsComponent.tsx";
import {InfoCommentsDummy, InfoCommentsJson} from "../components/comment-component/InfoCommentsComponent.tsx";


export const routes = createBrowserRouter([
    {path:'/', element:<App/>,
        children:[
            {path:'users',element:<UsersPage/>,
            children:[
                {path:'jsonplaceholder',element:<InfoUsersJson/>},
                {path:'dummyjson',element:<InfoUsersDummy/>}
            ]},
            {path:'posts',element:<PostsPage/>,
                children:[
                    {path:'jsonplaceholder',element:<InfoPostsJson/>},
                    {path:'dummyjson',element:<InfoPostsDummy/>}
                ]},
            {path:'comments',element:<CommentsPage/>,
                children:[
                    {path:'jsonplaceholder',element:<InfoCommentsJson/>},
                    {path:'dummyjson',element:<InfoCommentsDummy/>}
                ]},
            {path:'products',element:<ProductsPage/>},
        ]
    },
])