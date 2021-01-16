import { createReducer, on } from '@ngrx/store';

import { IBooks, IBook } from '../../books/interfaces/book';
import { UpdateBooksList, UpdateBookStatus, UpdateShownBook } from '../actions/book.action';

export interface IBooksState {
  list: IBooks;
  shown: IBook;
  updated: IBook;
}

const booksState: IBooksState = {
  list: null,
  shown: null,
  updated: null,
};

export const booksReducer = createReducer(
    booksState,
    on(UpdateBooksList, (state, action) => ({ ...state, list: action.data })),
    on(UpdateBookStatus, (state, action) => ({ ...state, updated: action.book })),
    on(UpdateShownBook, (state, action) => ({ ...state, shown: action.book })),
);
