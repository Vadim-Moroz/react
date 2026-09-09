import {ICommentsDummy} from "./ICommentsDummy.tsx";

export interface CommentsDummyModel {
  comments: ICommentsDummy[];
  total: number;
  skip: number;
  limit: number;
}