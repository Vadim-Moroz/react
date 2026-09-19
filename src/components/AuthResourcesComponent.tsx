import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.tsx";

const AuthResourcesComponent = () => {
    useEffect(()=>{
        loadAuthProducts().then(products =>
            console.log(products)).catch(reason => {
            console.log(reason)
            refresh().then(() => loadAuthProducts().then(products => console.log(products)))
        });
    })
    return (
        <div>
fgfg
        </div>
    );
};

export default AuthResourcesComponent;