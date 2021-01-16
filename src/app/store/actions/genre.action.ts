import { createAction, props } from '@ngrx/store';

import { IGenre, IGenres } from './../../books/interfaces/genre';

const API_GET_ALL_GENRES = '[Genres] Get All Genres';
const API_GET_GENRE_BY_ID = '[Genres] Get Genre By Id';
const API_POST_GENRE = '[Genres] Create Genre';
const API_PUT_GENRE = '[Genres] Change Genre';
const API_DELETE_GENRE = '[Genres] Delete Genre';

const CHANGE_LIST = '[Genres] Change List ';
const UPDATE_GENRE = '[Genres] Update Genre';
const UPDATE_SHOWN_GENRE = '[Genres] Update Shown Genre';

export const GetGenres = createAction(API_GET_ALL_GENRES, props<{ quantity: number }>());

export const GetGenreById = createAction(API_GET_GENRE_BY_ID, props<{ id: number }>());

export const CreateGenre = createAction(API_POST_GENRE, props<{genre: IGenre }>());

export const UpdateGenre = createAction(API_PUT_GENRE, props<{ genre: IGenre }>());

export const DeleteGenre = createAction(API_DELETE_GENRE, props<{ id: number }>());

export const UpdateGenresList = createAction(CHANGE_LIST, props<{ data: IGenres }>());

export const UpdateGenreStatus = createAction(UPDATE_GENRE, props<{ genre: IGenre }>());

export const UpdateShownGenre = createAction(UPDATE_SHOWN_GENRE, props<{ genre: IGenre }>());
