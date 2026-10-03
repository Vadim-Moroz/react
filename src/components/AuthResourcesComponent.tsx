import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.tsx";

const AuthResourcesComponent = () => {
    useEffect(()=>{
        // Викликає метод loadAuthProducts для отримання даних
        // Якщо токен доступу дійсний виконується запит для отримання продуктів
        loadAuthProducts().then(products =>
            console.log(products))
            // При недійсності токена запит падає і .catch перехоплює помилку та викликає метод refresh
            .catch(reason => {
            console.log(reason)
                // Оновлює токени
            refresh().then(() => loadAuthProducts().then(products => console.log(products)))// Після успішного оновлення викликає функцію для завантаження продуктів
        });
    })
    return (
        <div>
        </div>
    );
};

export default AuthResourcesComponent;