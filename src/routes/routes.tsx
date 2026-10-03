import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AuthResourcesPage from "../pages/AuthResourcesPage.tsx";

// Структура маршрутів сайту
export const routes = createBrowserRouter([
    {path:'/',element : <MainLayout/>,
        // Дочірні маршрути MainLayout
        children:[
            {index:true,element:<HomePage/>},
            {path:'login',element:<LoginPage/>},
            {path:'/auth/resources',element:<AuthResourcesPage/>}
        ]}
])