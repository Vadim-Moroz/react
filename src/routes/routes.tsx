import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersComponent from "../component/UsersComponent.tsx";

export const routes = createBrowserRouter([
    {
    path: "/",element:<App/>,
        children:[
            {path:'users',element:<UsersComponent/>}
        ]
    }
    ]

)