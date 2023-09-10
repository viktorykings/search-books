import { Dispatch } from 'redux';
import { FilterAction, booksStateActionTypes } from '../types/booksState';

export const saveFilterValue = (filter: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({ type: booksStateActionTypes.CHANGE_FILTER_VALUE, payload: filter });
  };
};
