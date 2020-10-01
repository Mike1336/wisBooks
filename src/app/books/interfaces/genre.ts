export interface IGenre {
  id: number;
  name: string;
  books: [];
}
export interface IGenres {
  genres: IGenre[];
  meta: {
    pages: number;
    records: number;
    limit: number;
    page: number;
  };

}
