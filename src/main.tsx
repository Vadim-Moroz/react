import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {router} from "./routes/routes.tsx";
import {store} from "./slices/store.tsx";
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    // Огортає весь застосунок та передає йому спільне сховище даних store
    <Provider store={store}>
        {/* RouterProvider забезпечує відображення потрібної сторінки відповідно до поточного URL*/}
        <RouterProvider router={router}/>
    </Provider>
)
