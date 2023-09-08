import { Dispatch } from 'redux';
import { FilterAction, filterActionTypes } from '../types/filter';

export const saveFilterValue = (filter: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({ type: filterActionTypes.CHANGE_FILTER_VALUE, payload: filter });
  };
};
