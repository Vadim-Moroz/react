
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";

createRoot(document.getElementById('root')!).render(
    // Запускає застосунок та передає йому налаштовану структуру маршрутів routes
    // RouterProvider забезпечує відображення потрібної сторінки відповідно до поточного URL
    <RouterProvider router={routes}/>
)
