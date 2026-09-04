import "./CommentComponent.css"
import {FC} from "react";
import {IComment} from "../../model/CommentModel.ts";

type PropsType={
    comment:IComment
}
export const CommentComponent:FC<PropsType> = ({comment}) => {
    return (
        <li className=' border-4'>
            {comment.postId},{comment.id},{comment.name},{comment.email},{comment.body}
        </li>
    );
};

