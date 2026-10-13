import UsersComponent from "../components/user-components/UsersComponent.tsx";

// Компонент UsersPage відповідає за відображення сторінки користувачів
const UsersPage = () => {
    // Повертаємо JSX-розмітку сторінки
    return (
        // Контейнер сторінки користувачів
        <div>
            {/* Компонент UsersComponent завантажує та відображає список користувачів */}
            <UsersComponent/>
        </div>
    );
};

// Експортуємо компонент сторінки для використання в маршрутизації
export default UsersPage;