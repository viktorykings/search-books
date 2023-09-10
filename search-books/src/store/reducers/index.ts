import { combineReducers } from '@reduxjs/toolkit';
import { googleBooksApi } from '../../services/googleBooksApi';
import { booksStateReducer } from './booksStateReducer';

export const rootReducer = combineReducers({
  booksState: booksStateReducer,
  [googleBooksApi.reducerPath]: googleBooksApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
