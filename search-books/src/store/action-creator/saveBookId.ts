import { Dispatch } from 'redux';
import { BookInfoAction, BookInfoActionTypes } from '../types/bookInfo';

export const saveBookId = (id: string) => {
  return (dispatch: Dispatch<BookInfoAction>) => {
    dispatch({ type: BookInfoActionTypes.CHOOSE_BOOK, payload: id });
  };
};