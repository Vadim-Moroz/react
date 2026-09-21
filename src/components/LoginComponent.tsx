import {useEffect} from "react";
import {login} from "../services/api.service.tsx";

const LoginComponent = () => {
    useEffect(()=>{
        // Викликає метод login та передає відповідні дані
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    },[])
    return (
        <div>

        </div>
    );
};

export default LoginComponent;