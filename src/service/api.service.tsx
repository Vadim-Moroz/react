import type {IComments} from "../models/comment-models/IComments.tsx";
import type {IPosts} from "../models/post-models/IPosts.tsx";
import type {IUsers} from "../models/user-models/IUsers.tsx";
import {urls} from "../constants/urls.ts";
import {UsersDummyModel} from "../models/user-models/UsersDummy.ts";
import {IUsersDummy} from "../models/user-models/IUsersDummy.tsx";
import {IPostsDummy} from "../models/post-models/IPostsDummy.tsx";
import {PostsDummyModel} from "../models/post-models/PostsDummy.ts";
import {CommentsDummyModel} from "../models/comment-models/CommentsDummy.ts";
import {ICommentsDummy} from "../models/comment-models/ICommentsDummy.tsx";

export const userService={
    getUsersJson: async (): Promise<IUsers[]> => {
        return await fetch(urls.users.AllUsersJson)
            .then(value => value.json())
    },
    getUsersDummy: async (): Promise<IUsersDummy[]> => {
        const response:UsersDummyModel = await fetch(urls.users.AllUsersDummy)
            .then(value => value.json())
        return response.users;
    }
}
export const postService={
    getPostsJson: async (): Promise<IPosts[]> => {
        return await fetch(urls.posts.AllPostsJson)
            .then(value => value.json())
    },
    getPostsDummy: async (): Promise<IPostsDummy[]> => {
        const response:PostsDummyModel = await fetch(urls.posts.AllPostsDummy)
            .then(value => value.json())
        return response.posts;
    }
}
export const commentService={
    getCommentsJson: async (): Promise<IComments[]> => {
        return await fetch(urls.comments.AllCommentsJson)
            .then(value => value.json())
    },
    getCommentsDummy: async (): Promise<ICommentsDummy[]> => {
        const response:CommentsDummyModel = await fetch(urls.comments.AllCommentsDummy)
            .then(value => value.json())
        return response.comments;
    }
}