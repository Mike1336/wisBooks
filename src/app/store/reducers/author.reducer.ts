import { createReducer, on } from '@ngrx/store';

import { IAuthor, IAuthors } from '../../authors/interfaces/author';

import { UpdateAuthorsList, UpdateAuthorStatus, UpdateShownAuthor } from './../actions/author.action';

export interface IAuthorsState {
  list: IAuthors;
  shown: IAuthor;
  updated: IAuthor;
}

const authorsState: IAuthorsState = {
  list: null,
  shown: null,
  updated: null,
};

export const authorsReducer = createReducer(
  authorsState,
  on(UpdateAuthorsList, (state, action) => ({ ...state, list: action.data })),
  on(UpdateShownAuthor, (state, action) => ({ ...state, shown: action.author })),
  on(UpdateAuthorStatus, (state, action) => ({ ...state, updated: action.author })),
);
