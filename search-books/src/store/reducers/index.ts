import { combineReducers } from '@reduxjs/toolkit';
import { searchReducer } from './searchReducer';
import { sortReducer } from './sortReducer';
import { bookInfoReducer } from './bookInfoReducer';
import { googleBooksApi } from '../../services/googleBooksApi';
export const rootReducer = combineReducers({
  search: searchReducer,
  sort: sortReducer,
  [googleBooksApi.reducerPath]: googleBooksApi.reducer,
  bookInfo: bookInfoReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
