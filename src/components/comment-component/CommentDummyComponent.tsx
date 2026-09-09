import {FC} from 'react';
import {ICommentsDummy} from "../../models/comment-models/ICommentsDummy.tsx";

type CommentTypeProp = {
    item:ICommentsDummy;
};
const CommentDummyComponent:FC<CommentTypeProp> = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <p>{item.body}</p>
            <p>{item.postId}</p>
            <p>{item.likes}</p>
            <p>{item.user.id}</p>
            <p>{item.user.username}</p>
            <p>{item.user.fullName}</p>
        </div>
    );
};

export default CommentDummyComponent;
