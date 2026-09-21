import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.tsx";

const AuthResourcesComponent = () => {
    useEffect(()=>{
        // Викликає метод loadAuthProducts для отримання даних
        loadAuthProducts().then(products =>
            console.log(products))
            // При помилці перехоплює її та викликає метод refresh
            .catch(reason => {
            console.log(reason)
            refresh().then(() => loadAuthProducts().then(products => console.log(products)))
        });
    })
    return (
        <div>
        </div>
    );
};

export default AuthResourcesComponent;