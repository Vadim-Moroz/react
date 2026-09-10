import {useEffect, useState} from "react";
import {generalService} from "../../service/api.service.tsx";
import {ICommentsDummy} from "../../models/comment-models/ICommentsDummy.tsx";
import {IComments} from "../../models/comment-models/IComments.tsx";
import CommentComponent from "./CommentComponent.tsx";
import CommentDummyComponent from "./CommentDummyComponent.tsx";
import {urls} from "../../constants/urls.ts";
import {CommentsDummyModel} from "../../models/comment-models/CommentsDummy.ts";

export const InfoCommentsJson = () => {
    const [comments, setComments] = useState<IComments[]>([])
    useEffect( ()=>{
        generalService.getDataJson <IComments[]>(urls.posts.AllPostsJson).then((AllComments)=>setComments(AllComments))
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
        generalService.getDataDummy <CommentsDummyModel & { comments: ICommentsDummy[]}>(urls.comments.AllCommentsDummy).then((AllComments)=>setComments(AllComments.comments))
    },[]);
    return (
        <div>
            {comments.map(comment=> <CommentDummyComponent key={comment.id} item={comment}/> )}
        </div>
    );
};
