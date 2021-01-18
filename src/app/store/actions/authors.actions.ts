export class GetAllAuthors {

  public static readonly type = '[API] GetAuthors';

  constructor() {}

}

export class GetAuthorsInQuantity {

  public static readonly type = '[API] GetAuthorsInQuantity';

  constructor(public quantity: number) {}

}

export class GetAuthorById {

  public static readonly type = '[API] GetAuthorById';

  constructor(public id: number) {}

}
