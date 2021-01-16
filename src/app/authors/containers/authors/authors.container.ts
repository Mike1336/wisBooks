import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { fromAuthor } from '../../../store';
import { IAuthor } from '../../interfaces/author';

import { IAuthorsState } from './../../../store/reducers/author.reducer';


@Component({
  selector: 'authors-container',
  templateUrl: './authors.container.html',
  styleUrls: ['./authors.container.scss'],
})
export class AuthorsContainer implements OnInit {

  public authorsQuantity = 26;

  public authors$: Observable<IAuthor[]>;

  constructor(private _store: Store<{ authorState: IAuthorsState }>) { }

  public ngOnInit(): void {
    this._listenData();
  }

  private _getAuthors(): void {
    this._store.dispatch(fromAuthor.GetAuthors({ quantity: this.authorsQuantity }));
  }

  private _listenData(): void {
    this._getAuthors();

    this.authors$ = this._store.select(fromAuthor.getAuthorsList)
    .pipe(
      switchMap((data) => {
        if (!data) {
          return of(false);
        }
        const { meta: { records, limit } } = data;

        this.authorsQuantity = records;

        if (records !== limit) {
          this._getAuthors();
        }

        return this._store.select(fromAuthor.getAuthorsList);
      }),
      pluck('authors'),
    );
  }

}
