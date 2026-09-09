interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface ICommentsDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}