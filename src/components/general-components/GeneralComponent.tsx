import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import CommentComponent from "../comments-components/CommentComponent.tsx";
import PostComponent from "../post-components/PostComponent.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../slices/usersSlice/UserSlice.tsx";
import {postSliceActions} from "../../slices/postSlice/PostSlice.tsx";
import {commentSliceActions} from "../../slices/commentSlice/CommentSlice.tsx";
import UserComponent from "../user-components/UserComponent.tsx";

const GeneralComponent = () => {
    // Отримує дані userSlice, postSlice та commentSlice з store та деструктуризує його на
    // масиви користувачів, постів та коментарів
    const {commentSlice:{comments},postSlice:{posts},userSlice:{users}} = useAppSelector((state) => state)
    // Отримує функцію dispatch для відправлення actions
    const dispatch = useAppDispatch();
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

    return (
        <div>
            <div>{users.map(user=><UserComponent key={user.id} item={user}/>)}</div>
            <div>{posts.map((post) => <PostComponent post={post}/>)}</div>
            <div>{comments.map((comment) => <CommentComponent comment={comment} />)}</div>
        </div>
    );
};

export default GeneralComponent;