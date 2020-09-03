import { Pipe, PipeTransform } from '@angular/core';

import { IGenre } from './../interfaces/genre';

@Pipe({
  name: 'comma',
})
export class CommaPipe implements PipeTransform {

  public transform(arr: IGenre[]): string {

    let strWithComma: string;
    for (let i = 0; i < arr?.length; i++) {
      if (i === (arr.length - 1)) {
        strWithComma += arr[i].name;
      } else {
        strWithComma += arr[i].name + ', ';
      }
    }

    return strWithComma;
  }

}
