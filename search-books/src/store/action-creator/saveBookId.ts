import { Dispatch } from 'redux';
// import { BookInfoAction } from '../types/bookInfo';
import { BookInfoAction, booksStateActionTypes } from '../types/booksState';

export const saveBookId = (id: string) => {
  return (dispatch: Dispatch<BookInfoAction>) => {
    dispatch({ type: booksStateActionTypes.SAVE_BOOK_ID, payload: id });
  };
};