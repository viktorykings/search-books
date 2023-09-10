import { BooksData } from "../../types/interfaces";

export interface SearchState {
  search: string;
  sort: string;
  filter: string;
  bookId: string;
  pagination: number;
  singleBookData: BooksData;
}

export interface SearchAction {
  type: booksStateActionTypes.ENTER_SEARCH_VALUE;
  payload: string;
}
export interface FilterAction {
  type: booksStateActionTypes.CHANGE_FILTER_VALUE;
  payload: string;
}
export interface SortAction {
  type: booksStateActionTypes.CHANGE_SORT_VALUE;
  payload: string;
}
  export interface BookInfoAction {
    type: booksStateActionTypes.SAVE_BOOK_ID;
    payload: string;
  }
  export interface PaginationAction {
    type: booksStateActionTypes.LOAD_MORE_BOOKS;
    payload: number;
  }

export enum booksStateActionTypes {
  ENTER_SEARCH_VALUE = 'ENTER_SEARCH_VALUE',
  CHANGE_SORT_VALUE = "CHANGE_SORT_VALUE",
  CHANGE_FILTER_VALUE = "CHANGE_FILTER_VALUE",
  SAVE_BOOK_ID = "SAVE_BOOK_ID",
  LOAD_MORE_BOOKS = "LOAD_MORE_BOOKS",
  GET_BOOK_DATA = "GET_BOOK_DATA",
}
