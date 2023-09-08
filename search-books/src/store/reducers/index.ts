import { combineReducers } from '@reduxjs/toolkit';
import { searchReducer } from './searchReducer';
import { sortReducer } from './sortReducer';
import { bookInfoReducer } from './bookInfoReducer';
import { googleBooksApi } from '../../services/googleBooksApi';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  search: searchReducer,
  sort: sortReducer,
  filter: filterReducer,
  bookInfo: bookInfoReducer,
  [googleBooksApi.reducerPath]: googleBooksApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
