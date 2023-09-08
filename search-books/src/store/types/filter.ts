export interface FilterState {
  filter: string;
}

export interface FilterAction {
  type: filterActionTypes.CHANGE_FILTER_VALUE;
  payload: string;
}

export enum filterActionTypes {
  CHANGE_FILTER_VALUE = 'CHANGE_FILTER_VALUE',
}
