import { FilterAction, FilterState, filterActionTypes } from '../types/filter';

const initialState: FilterState = {
  filter: 'All',
};
export const filterReducer = (filter = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case filterActionTypes.CHANGE_FILTER_VALUE:
      return { filter: action.payload };
    default:
      return filter;
  }
};
