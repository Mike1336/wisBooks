import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, mergeMap, pluck } from 'rxjs/operators';

import { IAuthor, IAuthors } from '../../interfaces/author';
import { AuthorsService } from '../../services/authors.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.container.html',
  styleUrls: ['./authors.container.scss'],
})
export class AuthorsContainer implements OnInit {

  public loading: boolean;
  public authorsQuantity: number;

  public authors$: Observable<IAuthor[]>;

  constructor(private authorsService: AuthorsService) { }

  public ngOnInit(): void {
    this.loading = true;
    this.getAuthors();
  }

    /**
   * Returns Observable with authors list
   */
  public getAuthors(): void {
    this.authors$ = this.authorsService.getAuthorsInQuantity(1)
      .pipe(
        map((data) => {
          return data.meta.records;
        }),
        mergeMap((quantity: number): Observable<IAuthors> => {
          this.authorsQuantity = quantity;
          this.loading = false;

          return this.authorsService.getAuthorsInQuantity(quantity);
        }),
        pluck('authors'),
        );
  }

}
