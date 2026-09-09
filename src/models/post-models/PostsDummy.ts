import {IPostsDummy} from "./IPostsDummy.tsx";

export interface PostsDummyModel {
  posts: IPostsDummy[];
  total: number;
  skip: number;
  limit: number;
}