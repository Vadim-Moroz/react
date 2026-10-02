import type {FC} from "react";
import type {IComment} from "../../models/IComments.tsx";

type CommentsPropsType = {
    comment: IComment
}

const CommentComponent:FC<CommentsPropsType> = ({comment}) => {
    return (
        <div>
            {comment.email}
        </div>
    );
};

export default CommentComponent;