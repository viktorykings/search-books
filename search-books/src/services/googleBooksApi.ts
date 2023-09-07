import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BooksData } from '../types/interfaces';

interface QueryRes {
  items: BooksData[];
  totalItems: number;
}
interface queryBody {
  q: string,
  sort: string
}

export const googleBooksApi = createApi({
  reducerPath: 'googleBooksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes' }),
  endpoints: (builder) => ({
    getBooks: builder.query<QueryRes, queryBody>({
      // query: (name) => `volumes?q=${name}:keyes&key=AIzaSyDifAsOPfc1C8OTkFSJRyBHf023B1h0Ri8`,
      query: ({q, sort}: queryBody) => ({
        url: '',
        params: {
          q: q,
          key: 'AIzaSyDifAsOPfc1C8OTkFSJRyBHf023B1h0Ri8',
          maxResults: 30,
          orderBy: sort
        },
      }),
    }),
    getBook: builder.query<BooksData, string>({
      query: (id: string) => ({
        url: `/${id}`
      })
    })
  }),
})

export const { useGetBooksQuery, useGetBookQuery } = googleBooksApi;
