import { Dispatch } from 'redux';
import { SortAction, sortActionTypes } from '../types/sort';

export const saveSortValue = (sort: string) => {
  return (dispatch: Dispatch<SortAction>) => {
    dispatch({ type: sortActionTypes.CHANGE_SORT_VALUE, payload: sort });
  };
};
