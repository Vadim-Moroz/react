import type {IUsers} from "./IUsers.ts";

export type Support = {
  url: string;
  text: string;
};

export type Cta = {
  label: string;
  url: string;
};

export type Meta = {
  powered_by: string;
  docs_url: string;
  upgrade_url: string;
  example_url: string;
  variant: string;
  message: string;
  cta: Cta;
  context: string;
};

export type ResponseIUsers = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUsers[];
  support: Support;
  _meta: Meta;
};