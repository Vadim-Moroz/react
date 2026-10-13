import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import GeneralPage from "../pages/GeneralPage.tsx";

// Структура маршрутів сайту яка визначає, які компоненти відображатимуться за відповідними адресами
export const router = createBrowserRouter([
    {
        // MainLayout містить сторінки і навігаційне меню
        path: "/",element:<MainLayout/>,
        // Дочірні маршрути MainLayout які відображаються за допомогою компонента Outlet
        children:[
            // Маршрут users відображає сторінку користувачів
            {path:"users",element:<UsersPage/>},
            // Маршрут posts відображає сторінку постів
            {path:"posts",element:<PostsPage/>},
            // Маршрут comments відображає сторінку коментарів
            {path:"comments",element:<CommentsPage/>},
            // Маршрут complex відображає сторінку із загальним списком користувачів, постів і коментарів.
            {path:"complex",element:<GeneralPage/>}
        ]
    }

])