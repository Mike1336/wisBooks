import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { State, Action, StateContext } from '@ngxs/store';

import { Create, Update, Delete } from './../../actions/common.actions';
import { GetBooks, GetBookById } from './../../actions/books.actions';
import { BooksService } from './../../../books/services/books.service';
import { IBooks, IBook } from './../../../books/interfaces/book';
import { IState } from './../interfaces/state';

@State<IState<IBooks, IBook>>({
  name: 'books',
  defaults: {
    list: null,
    item: null,
  },
})
@Injectable()
export class BooksState {

  constructor(
    private _service: BooksService,
    private _router: Router,
    private _ngZone: NgZone,
  ) {}

  @Action(GetBooks)
  public getBooks(
    ctx: StateContext<IState<IBooks, IBook>>,
    { filters, quantity, pageIndex }: GetBooks,
  ): Observable<IBooks> {
    return this._service.getList(quantity, pageIndex, filters).pipe(
      tap((result: IBooks) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          list: result,
        });
      }),
    );
  }

  @Action(GetBookById)
  public getBookById(
    ctx: StateContext<IState<IBooks, IBook>>,
    { id }: GetBookById,
  ): Observable<IBook> {
    return this._service.getById(id).pipe(
      catchError(
        () => {
          return this._ngZone.run(
            () => this._router.navigate(['/', '404'], { skipLocationChange: true }),
          );
        },
      ),
      tap((result: IBook) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

  @Action(Create)
  public create(
    ctx: StateContext<IState<IBooks, IBook>>,
    { item }: Create < IBook > ,
  ): Observable < IBook > {
    return this._service.create(item).pipe(
      tap((result: IBook) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

  @Action(Update)
  public update(
    ctx: StateContext<IState<IBooks, IBook>>,
    { item }: Update < IBook > ,
  ): Observable < IBook > {
    return this._service.update(item).pipe(
      tap((result: IBook) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

  @Action(Delete)
  public delete(
    ctx: StateContext<IState<IBooks, IBook>>,
    { id }: Delete,
  ): Observable<IBook> {
    return this._service.delete(id).pipe(
      tap((result: IBook) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

}
