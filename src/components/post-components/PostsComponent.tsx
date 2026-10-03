
import PostComponent from "./PostComponent.tsx";
import {postSliceActions} from "../../slices/postSlice/PostSlice.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";

const PostsComponent = () => {
    // Отримує стан postSlice з Redux та деструктуризує його на масив постів і стан їх завантаження
    const {posts,loadState} = useAppSelector(({postSlice}) => postSlice)
    // Отримує функцію dispatch для відправлення actions
    const dispatch = useAppDispatch();
    useEffect(() => {
        // Відправляє асинхронний action для отримання постів з API та збереження отриманих даних у store
        dispatch(postSliceActions.loadPosts());
    },[])
    return (
        <div>
            {!loadState&&<div>Loading</div>}
            {posts.map((post) => <PostComponent post={post} />)}
        </div>
    );
};

export default PostsComponent;