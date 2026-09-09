import {IUsersDummy} from "./IUsersDummy.tsx";

export interface UsersDummyModel {
  users: IUsersDummy[];
  total: number;
  skip: number;
  limit: number;
}