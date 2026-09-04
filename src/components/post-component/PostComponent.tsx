import "./PostComponent.css"
import {FC} from "react";
import {IPost} from "../../model/PostModel.ts";

type PropsType={
    post:IPost
}
export const PostComponent:FC<PropsType> = ({post}) => {
    return (
        <li className=' border-4'>
            {post.userId},{post.id},{post.title},{post.body}
        </li>
    );
};
