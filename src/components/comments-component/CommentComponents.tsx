import "./CommentComponents.css"
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import {useEffect, useState} from "react";
import {loadtodos} from "../../service/api.ts";
import {IComment} from "../../model/CommentModel.ts";
export const CommentComponents = () => {
    const [comment, setComment] = useState<IComment[]>([]);
    useEffect(() => {
        loadtodos().then(value => setComment(value))

    }, []);

    return (
        <ul>
            {comment.map((comment:IComment)=>{
                    return <CommentComponent comment={comment} key={comment.id}></CommentComponent>;
                })
            }
        </ul>
    );
};