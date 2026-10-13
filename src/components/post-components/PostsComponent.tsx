
import PostComponent from "./PostComponent.tsx";
import {postSliceActions} from "../../slices/postSlice/PostSlice.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";

// Компонент PostsComponent отримує пости з Redux Store та відображає їх на сторінці
const PostsComponent = () => {
    // Отримує стан postSlice з Redux та деструктуризує його на масив постів і стан їх завантаження
    const {posts,loadState} = useAppSelector(({postSlice}) => postSlice)
    // Отримує функцію dispatch для відправлення actions
    const dispatch = useAppDispatch();
    // useEffect виконується після монтування компонента
    useEffect(() => {
        // Відправляє асинхронний action для отримання постів з API та збереження отриманих даних у store
        dispatch(postSliceActions.loadPosts());
    },[dispatch])
    // Повертаємо JSX-розмітку компонента
    return (
        // Контейнер для відображення списку постів
        <div>
            {/* Якщо пости ще завантажуються, відображаємо повідомлення Loading. */}
            {!loadState&&<div>Loading</div>}
            {/* За допомогою map перебираємо масив постів і для кожного елемента створюємо PostComponent */}
            {posts.map((post) => <PostComponent key={post.id} post={post} />)}
        </div>
    );
};

// Експортуємо компонент для використання в інших частинах застосунку
export default PostsComponent;