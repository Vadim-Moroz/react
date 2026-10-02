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
    const {commentSlice:{comments},postSlice:{posts},userSlice:{users}} = useAppSelector((state) => state)
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(!users.length) dispatch(userSliceActions.loadUsers());
        if(!posts.length) dispatch(postSliceActions.loadPosts());
        if(!comments.length) dispatch(commentSliceActions.loadComments());
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