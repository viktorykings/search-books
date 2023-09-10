import { Dispatch } from 'redux';
import { PaginationAction, booksStateActionTypes } from '../types/booksState';

export const showMore = (page: number) => {
  return (dispatch: Dispatch<PaginationAction>) => {
    dispatch({ type: booksStateActionTypes.LOAD_MORE_BOOKS, payload: page === 0 ? 0 : page + 30 });
  };
};
