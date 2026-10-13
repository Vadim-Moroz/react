import CommentsComponent from "../components/comments-components/CommentsComponent.tsx";

// Компонент CommentsPage відповідає за відображення сторінки коментарів
const CommentsPage = () => {
    // Повертаємо JSX-розмітку сторінки
    return (
        // Контейнер сторінки коментарів
        <div>
            {/* Компонент CommentsComponent завантажує та відображає список коментарів */}
            <CommentsComponent/>
        </div>
    );
};

// Експортуємо компонент сторінки для використання в маршрутизації
export default CommentsPage;