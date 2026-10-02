import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";;
import CommentComponent from "./CommentComponent.tsx";
import {commentSliceActions} from "../../slices/commentSlice/CommentSlice.tsx";

const CommentsComponent = () => {
    const {comments,loadState} = useAppSelector(({commentSlice}) => commentSlice) // Достає потрібні дані в потрібний атрибут
    const dispatch = useAppDispatch(); // Типізує dispatch
    useEffect(() => {
        dispatch(commentSliceActions.loadComments());// Отримує коментарів
    },[])
    return (
        <div>
            {!loadState&&<div>Loading</div>}
            {comments.map((comment) => <CommentComponent comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;