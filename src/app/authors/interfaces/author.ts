export interface IAuthor {
  id: number;
  first_name: string;
  last_name: string;
}

export interface IAuthors {
  authors: IAuthor[];
  meta: {
    pages: number;
    records: number;
    limit: number;
    page: number;
  };
}
