import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import PaginationLayout from "../layout/PaginationLayout.tsx";
import ProductsPage from "../pages/ProductsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {
                path: '', element: <PaginationLayout/>, children: [
                    {path: 'products', element: <ProductsPage/>}
                ]
            }
        ]
    }
]);