
import PostComponent from "./PostComponent.tsx";
import {postSliceActions} from "../../slices/postSlice/PostSlice.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";

const PostsComponent = () => {
    const {posts,loadState} = useAppSelector(({postSlice}) => postSlice) // Достає потрібні дані в потрібний атрибут
    const dispatch = useAppDispatch(); // Типізує dispatch
    useEffect(() => {
        dispatch(postSliceActions.loadPosts());// Отримує пости
    },[])
    return (
        <div>
            {!loadState&&<div>Loading</div>}
            {posts.map((post) => <PostComponent post={post} />)}
        </div>
    );
};

export default PostsComponent;