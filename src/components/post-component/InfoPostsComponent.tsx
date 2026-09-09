import {useEffect, useState} from "react";
import {postService} from "../../service/api.service.tsx";
import {IPosts} from "../../models/post-models/IPosts.tsx";
import {IPostsDummy} from "../../models/post-models/IPostsDummy.tsx";
import PostDummyComponent from "./PostDummyComponent.tsx";
import PostComponent from "./PostComponent.tsx";

export const InfoPostsJson = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect( ()=>{
        postService.getPostsJson().then((AllPosts)=>setPosts(AllPosts))
    },[]);
    return (
        <div>
            {posts.map(post=> <PostComponent key={post.id} item={post}/> )}
        </div>
    );
};

export const InfoPostsDummy = () => {
    const [posts, setPosts] = useState<IPostsDummy[]>([])
    useEffect( ()=>{
        postService.getPostsDummy().then((AllPosts)=>setPosts(AllPosts))
    },[]);
    return (
        <div>
            {posts.map(post=> <PostDummyComponent key={post.id} item={post}/> )}
        </div>
    );
};
