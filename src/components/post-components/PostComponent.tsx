import type {IPost} from "../../models/IPosts.tsx";
import type {FC} from "react";

type PostsPropsType = {
    post: IPost
}

const PostComponent:FC<PostsPropsType> = ({post}) => {
    return (
        <div>
            {post.id}{post.title}
        </div>
    );
};

export default PostComponent;