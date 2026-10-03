import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";;
import CommentComponent from "./CommentComponent.tsx";
import {commentSliceActions} from "../../slices/commentSlice/CommentSlice.tsx";

const CommentsComponent = () => {
    // Отримує стан commentSlice з Redux та деструктуризує його на масив коментарів і стан їх завантаження
    const {comments,loadState} = useAppSelector(({commentSlice}) => commentSlice)
    // Отримує функцію dispatch для відправлення actions
    const dispatch = useAppDispatch();
    useEffect(() => {
        // Відправляє асинхронний action для отримання коментарів з API та збереження отриманих даних у store
        dispatch(commentSliceActions.loadComments());
    },[])
    return (
        <div>
            {!loadState&&<div>Loading</div>}
            {comments.map((comment) => <CommentComponent comment={comment} />)}
        </div>
    );
};

export default CommentsComponent;