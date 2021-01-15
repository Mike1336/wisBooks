import { createSelector } from '@ngrx/store';

import { IBook, IBooks } from './../books/interfaces/book';
import { IRootState } from './reducers';

const getList = (state: IRootState): IBooks => state.books;
const getChangedBook = (state: IRootState): IBook => state.updatedBook;
const getDisplayedBook = (state: IRootState): IBook => state.shownBook;

export const getBookList = createSelector(
  (state: {rootState: IRootState}) => state.rootState,
  getList,
);

export const getUpdatedBook = createSelector(
  (state: {rootState: IRootState}) => state.rootState,
  getChangedBook,
);

export const getShownBook = createSelector(
  (state: {rootState: IRootState}) => state.rootState,
  getDisplayedBook,
);
