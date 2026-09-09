import {FC} from 'react';
import {IComments} from "../../models/comment-models/IComments.tsx";

type CommentTypeProp = {
    item:IComments;
};
const CommentComponent:FC<CommentTypeProp> = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <p>"id": {item.postId}</p>
            <p>"name": {item.name}</p>
            <p>"email": {item.email}</p>
            <p>{item.body}</p>
        </div>
    );
};

export default CommentComponent;