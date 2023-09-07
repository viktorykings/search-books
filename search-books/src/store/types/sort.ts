export interface SortState {
  sort: string;
}

export interface SortAction {
  type: sortActionTypes.CHANGE_SORT_VALUE;
  payload: string;
}

export enum sortActionTypes {
  CHANGE_SORT_VALUE = 'CHANGE_SORT_VALUE',
}
