import "./PostComponents.css"
import {PostComponent} from "../post-component/PostComponent.tsx";
import {useEffect, useState} from "react";
import {loadtodos} from "../../service/api.ts";
import {IPost} from "../../model/PostModel.ts";
export const PostComponents = () => {
    const [post, setPost] = useState<IPost[]>([]);
    useEffect(() => {
        loadtodos().then(value => setPost(value))

    }, []);

    return (
        <ul>
            {post.map((post:IPost)=>{
                    return <PostComponent post={post} key={post.id}></PostComponent>;
                })
            }
        </ul>
    );
};