import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import CommentComponent from "../comments-components/CommentComponent.tsx";
import PostComponent from "../post-components/PostComponent.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../slices/usersSlice/UserSlice.tsx";
import {postSliceActions} from "../../slices/postSlice/PostSlice.tsx";
import {commentSliceActions} from "../../slices/commentSlice/CommentSlice.tsx";
import UserComponent from "../user-components/UserComponent.tsx";

// Компонент GeneralComponent відображає загальний список користувачів, постів і коментарів, отриманих із Redux Store
const GeneralComponent = () => {
    // Отримує дані userSlice, postSlice та commentSlice з store та деструктуризує його на
    // масиви користувачів, постів та коментарів
    const {commentSlice:{comments},postSlice:{posts},userSlice:{users}} = useAppSelector((state) => state)
    // Отримує функцію dispatch для відправлення actions
    const dispatch = useAppDispatch();
    // useEffect перевіряє наявність даних у масивах
    useEffect(() => {
        // Перевіряє чи масиви порожні, якщо так то виконує API запит для отримання відповідних даних
        if(!users.length) dispatch(userSliceActions.loadUsers());
        if(!posts.length) dispatch(postSliceActions.loadPosts());
        if(!comments.length) dispatch(commentSliceActions.loadComments());
        // При зміні значень виконується повторно
    },[users.length, posts.length, comments.length, dispatch])
    console.log(users)
    console.log(posts)
    console.log(comments)

    // Повертаємо JSX-розмітку з трьома окремими блоками даних
    return (
        // Контейнер, що об'єднує всі секції компонента
        <div>
            {/* За допомогою map перебираємо масив користувачів і для кожного елемента створюємо UserComponent */}
            <div>{users.map(user=><UserComponent key={user.id} item={user}/>)}</div>
            {/* За допомогою map перебираємо масив постів і для кожного елемента створюємо PostComponent */}
            <div>{posts.map((post) => <PostComponent key={post.id} post={post}/>)}</div>
            {/* За допомогою map перебираємо масив коментарів і для кожного елемента створюємо CommentComponent */}
            <div>{comments.map((comment) => <CommentComponent key={comment.id} comment={comment} />)}</div>
        </div>
    );
};

// Експортуємо компонент для використання в інших частинах застосунку
export default GeneralComponent;