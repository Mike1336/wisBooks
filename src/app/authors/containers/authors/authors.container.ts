import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, pluck } from 'rxjs/operators';

import { IAuthor, IAuthors } from '../../interfaces/author';
import { AuthorsService } from '../../services/authors.service';


@Component({
  selector: 'authors-container',
  templateUrl: './authors.container.html',
  styleUrls: ['./authors.container.scss'],
})
export class AuthorsContainer implements OnInit {

  public authorsQuantity: number;

  public authors$: Observable<IAuthor[]>;

  constructor(private _authorsService: AuthorsService) { }

  public ngOnInit(): void {
    this.getAuthors();
  }

    /**
   * Returns Observable with authors list
   */
  public getAuthors(): void {
    this.authors$ = this._authorsService.getAuthorsInQuantity(1)
      .pipe(
        map((data) => {
          return data.meta.records;
        }),
        mergeMap((quantity: number): Observable<IAuthors> => {
          this.authorsQuantity = quantity;

          return this._authorsService.getAuthorsInQuantity(quantity);
        }),
        pluck('authors'),
      );
  }

}
