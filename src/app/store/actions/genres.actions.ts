export class GetAllGenres {

  public static readonly type = '[API] GetGenres';
  
  constructor() {}
  
}
  
export class GetGenresInQuantity {
  
    public static readonly type = '[API] GetGenresInQuantity';
  
    constructor(public quantity: number) {}
  
  }
  
export class GetGenreById {
  
    public static readonly type = '[API] GetGenreById';
  
    constructor(public id: number) {}
  
  }
  