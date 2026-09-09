interface Reactions {
  likes: number;
  dislikes: number;
}

export interface IPostsDummy {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}