import { IAuthor } from '../../authors/interfaces/author';

export interface IBook {
  id: number;
  description: string;
  author_id: number;
  title: string;
  price: number;
  genres:
      {
        id: number;
        name: string;
      }[];
  previews: [];
  image: string;
  writing_date: string;
  release_date: string;
  author?: IAuthor;

}
export interface IBooks {

  books: IBook[];
  meta: {
    pages: number;
    records: number;
    limit: number;
    page: number;
  };
}

