import {FC} from 'react';
import {IPosts} from "../../models/post-models/IPosts.tsx";

type PostTypeProp = {
    item:IPosts;
};
const PostComponent:FC<PostTypeProp> = ({item}) => {
    return (
        <div>
            <h1>{item.id}</h1>
            <p>{item.userId}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
        </div>
    );
};

export default PostComponent;