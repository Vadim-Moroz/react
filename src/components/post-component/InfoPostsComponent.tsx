import {useEffect, useState} from "react";
import {generalService} from "../../service/api.service.tsx";
import {IPosts} from "../../models/post-models/IPosts.tsx";
import {IPostsDummy} from "../../models/post-models/IPostsDummy.tsx";
import PostDummyComponent from "./PostDummyComponent.tsx";
import PostComponent from "./PostComponent.tsx";
import {urls} from "../../constants/urls.ts";
import {PostsDummyModel} from "../../models/post-models/PostsDummy.ts";

export const InfoPostsJson = () => {
    const [posts, setPosts] = useState<IPosts[]>([])
    useEffect( ()=>{
        generalService.getDataJson <IPosts[]>(urls.posts.AllPostsJson).then((AllPosts)=>setPosts(AllPosts))
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
        generalService.getDataDummy <PostsDummyModel & { posts: IPostsDummy[]}>(urls.posts.AllPostsDummy).then((AllPosts)=>setPosts(AllPosts.posts))
    },[]);
    return (
        <div>
            {posts.map(post=> <PostDummyComponent key={post.id} item={post}/> )}
        </div>
    );
};
