import PostsComponent from "../components/post-components/PostsComponent.tsx";

// Компонент PostsPage відповідає за відображення сторінки постів
const PostsPage = () => {
    // Повертаємо JSX-розмітку сторінки
    return (
        // Контейнер сторінки постів
        <div>
            {/* Компонент PostsComponent завантажує та відображає список постів */}
            <PostsComponent/>
        </div>
    );
};

// Експортуємо компонент сторінки для використання в маршрутизації
export default PostsPage;