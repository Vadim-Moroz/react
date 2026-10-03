import {useEffect} from "react";
import {login} from "../services/api.service.tsx";

const LoginComponent = () => {
    useEffect(()=>{
        // Викликає метод login та передає відповідні дані
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });// Спеціально створені дані для перевірки працездатності програми в реальному застосунку мала бути форма
    },[])// Прожній масив означає один виклик пісял першого рендуру
    return (
        <div>

        </div>
    );
};

export default LoginComponent;