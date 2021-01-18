export class Create<T> {

  public static readonly type = '[API] Create Item';

  constructor(public item: T) {}

}

export class Update<T> {

  public static readonly type = '[API] Update Item';

  constructor(public item: T) {}

}

export class Delete {

  public static readonly type = '[API] Delete Item';

  constructor(public id: number) {}

}
