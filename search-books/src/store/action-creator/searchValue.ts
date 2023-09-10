import { Dispatch } from 'redux';
// import { SearchAction } from '../types/search';
import { SearchAction, booksStateActionTypes } from '../types/booksState';

export const saveSearchValue = (search: string) => {
  return (dispatch: Dispatch<SearchAction>) => {
    dispatch({ type: booksStateActionTypes.ENTER_SEARCH_VALUE, payload: search });
  };
};
