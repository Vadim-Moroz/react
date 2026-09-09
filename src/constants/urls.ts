const baseUrlJson = 'https://jsonplaceholder.typicode.com';
const baseUrlDummy = 'https://dummyjson.com';
export const urls = {
    users: {
        AllUsersJson:baseUrlJson+'/users',
        AllUsersDummy:baseUrlDummy+'/users',
    },
    posts:{
        AllPostsJson:baseUrlJson+'/posts',
        AllPostsDummy:baseUrlDummy+'/posts',
    },
    comments:{
        AllCommentsJson:baseUrlJson+'/comments',
        AllCommentsDummy:baseUrlDummy+'/comments',
    }
}