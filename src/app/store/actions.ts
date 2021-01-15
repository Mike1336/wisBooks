import { createAction, props } from '@ngrx/store';

import { IFilters } from '../books/interfaces/filters';

import { IBook, IBooks } from './../books/interfaces/book';

const API_GET_ALL_BOOKS = '[Books] Get all books';
const API_GET_BOOK_BY_ID = '[Books] Get Book By Id';
const API_POST_BOOK = '[Books] Post Book';
const API_PUT_BOOK = '[Books] Put Book';
const API_DELETE_BOOK = '[Books] Delete Book';

const CHANGE_LIST = '[Books] Change List ';
const UPDATE_BOOK = '[Books] Update Book';
const UPDATE_SHOWN_BOOK = '[Books] Update Shown Book';

export const GetBooks = createAction(API_GET_ALL_BOOKS, props<{
  quantity?: number; page?: number; filters?: IFilters;
}>());

export const GetBookById = createAction(API_GET_BOOK_BY_ID, props<{ id: number }>());

export const CreateBook = createAction(API_POST_BOOK, props<{book: IBook }>());

export const UpdateBook = createAction(API_PUT_BOOK, props<{ book: IBook }>());

export const DeleteBook = createAction(API_DELETE_BOOK, props<{ id: number }>());

export const UpdateBooksList = createAction(CHANGE_LIST, props<{ data: IBooks }>());

export const UpdateBookStatus = createAction(UPDATE_BOOK, props<{ book: IBook }>());

export const UpdateShownBook = createAction(UPDATE_SHOWN_BOOK, props<{ book: IBook }>());
