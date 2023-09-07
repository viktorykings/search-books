import { BookInfoAction, BookInfoState, BookInfoActionTypes } from '../types/bookInfo';

const initialState: BookInfoState = {
  id: '',
};
export const bookInfoReducer = (state = initialState, action: BookInfoAction): BookInfoState => {
  switch (action.type) {
    case BookInfoActionTypes.CHOOSE_BOOK:
      return { id: action.payload };
    default:
      return state;
  }
};
