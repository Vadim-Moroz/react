import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import CommentComponent from "./CommentComponent.tsx";
import {commentSliceActions} from "../../slices/commentSlice/CommentSlice.tsx";

// Компонент CommentsComponent отримує коментарі з Redux Store та відображає їх на сторінці
const CommentsComponent = () => {
    // Отримує стан commentSlice з Redux та деструктуризує його на масив коментарів і стан їх завантаження
    const {comments,loadState} = useAppSelector(({commentSlice}) => commentSlice)
    // Отримує функцію dispatch для відправлення actions
    const dispatch = useAppDispatch();
    // useEffect виконується після монтування компонента
    useEffect(() => {
        // Відправляє асинхронний action для отримання коментарів з API та збереження отриманих даних у store
        dispatch(commentSliceActions.loadComments());
    },[dispatch])
    // Повертаємо JSX-розмітку компонента
    return (
        // Контейнер для відображення списку коментарів
        <div>
            {/* Якщо коментарі ще завантажуються, відображаємо повідомлення Loading. */}
            {!loadState&&<div>Loading</div>}
            {/* За допомогою map перебираємо масив коментарів і для кожного елемента створюємо CommentComponent */}
            {comments.map((comment) => <CommentComponent key={comment.id} comment={comment} />)}
        </div>
    );
};

// Експортуємо компонент для використання в інших частинах застосунку
export default CommentsComponent;