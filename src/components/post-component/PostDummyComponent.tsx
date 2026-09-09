import {FC} from 'react';
import {IPostsDummy} from "../../models/post-models/IPostsDummy.tsx";

type PostTypeProp = {
    item:IPostsDummy;
};
const PostDummyComponent:FC<PostTypeProp> = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <p>{item.title}</p>
            <p>{item.body}</p>
            <p>{item.tags.map((item:string) =>item)}</p>
            <p>{item.reactions.likes}</p>
            <p>{item.reactions.dislikes}</p>
            <p>{item.views}</p>
            <p>{item.userId}</p>
        </div>
    );
};

export default PostDummyComponent;
