import {useEffect, useState} from "react";
import {commentService} from "../../service/api.service.tsx";
import {ICommentsDummy} from "../../models/comment-models/ICommentsDummy.tsx";
import {IComments} from "../../models/comment-models/IComments.tsx";
import CommentComponent from "./CommentComponent.tsx";
import CommentDummyComponent from "./CommentDummyComponent.tsx";

export const InfoCommentsJson = () => {
    const [comments, setComments] = useState<IComments[]>([])
    useEffect( ()=>{
        commentService.getCommentsJson().then((AllComments)=>setComments(AllComments))
    },[]);
    return (
        <div>
            {comments.map(comment=> <CommentComponent key={comment.id} item={comment}/> )}
        </div>
    );
};

export const InfoCommentsDummy = () => {
    const [comments, setComments] = useState<ICommentsDummy[]>([])
    useEffect( ()=>{
        commentService.getCommentsDummy().then((AllComments)=>setComments(AllComments))
    },[]);
    return (
        <div>
            {comments.map(comment=> <CommentDummyComponent key={comment.id} item={comment}/> )}
        </div>
    );
};
