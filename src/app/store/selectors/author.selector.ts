import { createSelector } from '@ngrx/store';

import { IAuthor, IAuthors } from '../../authors/interfaces/author';

import { IAuthorsState } from './../reducers/author.reducer';

const getList = (state: IAuthorsState): IAuthors => state.list;
const getChanged = (state: IAuthorsState): IAuthor => state.updated;
const getDisplayed = (state: IAuthorsState): IAuthor => state.shown;

export const getAuthorsList = createSelector(
  (state: { authorState: IAuthorsState }) => state.authorState,
  getList,
);

export const getUpdatedAuthor = createSelector(
  (state: { authorState: IAuthorsState }) => state.authorState,
  getChanged,
);

export const getShownAuthor = createSelector(
  (state: { authorState: IAuthorsState }) => state.authorState,
  getDisplayed,
);
