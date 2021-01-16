import { createAction, props } from '@ngrx/store';

import { IFilters } from './../../books/interfaces/filters';
import { IAuthor, IAuthors } from './../../authors/interfaces/author';

const API_GET_ALL_AUTHORS = '[Authors] Get All Authors';
const API_GET_AUTHOR_BY_ID = '[Authors] Get Author By Id';
const API_POST_AUTHOR = '[Authors] Create Author';
const API_PUT_AUTHOR = '[Authors] Update Author';
const API_DELETE_AUTHOR = '[Authors] Delete Author';

const CHANGE_LIST = '[Authors] Change List';
const UPDATE_AUTHOR = '[Authors] Update Book';
const UPDATE_SHOWN_AUTHOR = '[Authors] Update Shown Book';

export const GetAuthors = createAction(API_GET_ALL_AUTHORS, props<{ quantity: number }>());

export const GetAuthorById = createAction(API_GET_AUTHOR_BY_ID, props<{ id: number }>());

export const CreateAuthor = createAction(API_POST_AUTHOR, props<{author: IAuthor }>());

export const UpdateAuthor = createAction(API_PUT_AUTHOR, props<{ author: IAuthor }>());

export const DeleteAuthor = createAction(API_DELETE_AUTHOR, props<{ id: number }>());

export const UpdateAuthorsList = createAction(CHANGE_LIST, props<{ data: IAuthors }>());

export const UpdateAuthorStatus = createAction(UPDATE_AUTHOR, props<{ author: IAuthor }>());

export const UpdateShownAuthor = createAction(UPDATE_SHOWN_AUTHOR, props<{ author: IAuthor }>());
