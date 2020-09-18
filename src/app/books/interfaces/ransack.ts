import { RansackMethod } from './../ransack/ransack';

export interface IRsTypes {
  [key: string]: RansackMethod |
                IRsInstructions |
                IRsInstructions[];
}

export interface IRsInstructions {
  matcher: RansackMethod;
  name?: string;
  postfix?: string;
  from?: string;
}
