import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BooksData } from '../types/interfaces';

interface QueryRes {
  items: BooksData[];
  totalItems: number;
}
interface queryBody {
  q: string,
  sort: string,
  startInd: number,
  category: string,
}

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const KEY =  process.env.REACT_APP_USER_TOKEN;
export const googleBooksApi = createApi({
  reducerPath: 'googleBooksApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query<QueryRes, queryBody>({
      query: ({q, sort, startInd, category}: queryBody) => ({
        url: '',
        params: {
          q: q,
          key: KEY,
          startIndex: startInd,
          maxResults: 30,
          orderBy: sort,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (currentCache, newItems) => {
        if (newItems.items) currentCache.items.push(...newItems.items)
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
    }),
    getBook: builder.query<BooksData, string>({
      query: (id: string) => ({
        url: `/${id}`
      })
    })
  }),
})

export const { useGetBooksQuery, useGetBookQuery } = googleBooksApi;
