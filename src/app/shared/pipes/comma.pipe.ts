import { Pipe, PipeTransform } from '@angular/core';

import { IGenre } from './../../books/interfaces/genre';

@Pipe({
  name: 'comma',
})
export class CommaPipe implements PipeTransform {

  public transform(arr: IGenre[]): string {
    return arr.map((genre) => genre.name).join();
  }

}
