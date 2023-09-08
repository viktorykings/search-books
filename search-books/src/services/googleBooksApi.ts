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
  category: string
}

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const googleBooksApi = createApi({
  reducerPath: 'googleBooksApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query<QueryRes, queryBody>({
      query: ({q, sort, startInd, category}: queryBody) => ({
        url: '',
        params: {
          q: `+intitle:${q}+insubject${category === 'All' ? '' : category}`,
          key: 'AIzaSyDifAsOPfc1C8OTkFSJRyBHf023B1h0Ri8',
          startIndex: 0,
          maxResults: 30,
          orderBy: sort,
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
