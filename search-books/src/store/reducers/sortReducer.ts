import { SortAction, SortState, sortActionTypes } from '../types/sort';

const initialState: SortState = {
  sort: 'relevance',
};
export const sortReducer = (sort = initialState, action: SortAction): SortState => {
  switch (action.type) {
    case sortActionTypes.CHANGE_SORT_VALUE:
      return { sort: action.payload };
    default:
      return sort;
  }
};
