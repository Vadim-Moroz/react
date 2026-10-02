import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {router} from "./routes/routes.tsx";
import {store} from "./slices/store.tsx";
import {RouterProvider} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
