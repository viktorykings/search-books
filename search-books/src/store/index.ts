import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { googleBooksApi } from '../services/googleBooksApi';

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(googleBooksApi.middleware),
  });
}

const store = setupStore();
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
