export interface BookInfoState {
    id: string ;
  }
  
  export interface BookInfoAction {
    type: BookInfoActionTypes.CHOOSE_BOOK;
    payload: string;
  }
  
  export enum BookInfoActionTypes {
    CHOOSE_BOOK = 'CHOOSE_BOOK',
  }
  