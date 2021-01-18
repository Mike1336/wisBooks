import { IFilters } from 'src/app/books/interfaces/filters';

export class GetBooks {

  public static readonly type = '[API] GetBooks';

  constructor(
      public filters?: IFilters,
      public quantity: number = 10,
      public pageIndex: number = 0,
  ) {}

}

export class GetBookById {

  public static readonly type = '[API] GetById';

  constructor(public id: number) {}

}
