import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

import { tap, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { State, Action, StateContext } from '@ngxs/store';

import { AuthorsService } from './../../../authors/services/authors.service';
import {
  GetAllAuthors,
  GetAuthorById,
  GetAuthorsInQuantity,
} from './../../actions/authors.actions';
import { Create, Update, Delete } from './../../actions/common.actions';
import { IAuthors, IAuthor } from './../../../authors/interfaces/author';
import { IState } from './../interfaces/state';

@State<IState<IAuthors, IAuthor>>({
  name: 'authors',
  defaults: {
    list: null,
    item: null,
  },
})
@Injectable()
export class AuthorsState {

  constructor(
    private _service: AuthorsService,
    private _router: Router,
    private _ngZone: NgZone,
  ) {}

  @Action(GetAllAuthors)
  public getList(
    ctx: StateContext<IState<IAuthors, IAuthor>>,
  ): Observable<IAuthors> {
    return this._service.getInQuantity(1).pipe(
      switchMap(
        ({ meta: { records } }: IAuthors) => this._service.getInQuantity(records),
      ),
      tap((result: IAuthors) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          list: result,
        });
      }),
    );
  }

  @Action(GetAuthorsInQuantity)
  public getInQuantity(
    ctx: StateContext<IState<IAuthors, IAuthor>>,
    { quantity }: GetAuthorsInQuantity,
  ): Observable<IAuthors> {
    return this._service.getInQuantity(quantity).pipe(
      tap((result: IAuthors) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          list: result,
        });
      }),
    );
  }


  @Action(GetAuthorById)
  public getById(
    ctx: StateContext<IState<IAuthors, IAuthor>>,
    { id }: GetAuthorById,
  ): Observable<IAuthor> {
    return this._service.getById(id).pipe(
      catchError(
        () => {
          return this._ngZone.run(
            () => this._router.navigate(['/', '404'], { skipLocationChange: true }),
          );
        },
      ),
      tap((result: IAuthor) => {
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
    ctx: StateContext<IState<IAuthors, IAuthor>>,
    { item }: Create <IAuthor> ,
  ): Observable <IAuthor> {
    return this._service.create(item).pipe(
      tap((result: IAuthor) => {
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
    ctx: StateContext<IState<IAuthors, IAuthor>>,
    { item }: Update <IAuthor> ,
  ): Observable <IAuthor> {
    return this._service.update(item).pipe(
      tap((result: IAuthor) => {
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
    ctx: StateContext<IState<IAuthors, IAuthor>>,
    { id }: Delete,
  ): Observable<IAuthor> {
    return this._service.delete(id).pipe(
      tap((result: IAuthor) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

}
