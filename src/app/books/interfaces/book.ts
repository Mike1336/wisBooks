import { IAuthor } from '../../authors/interfaces/author';

import { IGenre } from './genre';

export interface IBook {
  author_id: number;
  description: string;
  genres: IGenre[];
  id: number;
  image: string;
  previews: [];
  price: number;
  release_date: string;
  title: string;
  writing_date: string;
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

