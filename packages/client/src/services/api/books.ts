import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book, TResponse } from "../../types";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Book"],
  endpoints: (build) => ({
    getBooks: build.query<
      TResponse<Book[]>,
      { limit: number; skip: number, q: string }
    >({
      query: (query = {limit: 10, skip: 0, q: ''}) => ({
        url: "books",
        params: {
          ...query
        }
      }),
      providesTags: ["Book"],
    }),
    getBook: build.query({
      query: (id: number) => ({
        url: `books/${id}`,
      }),
      providesTags: ["Book"],
    }),
    searchBooks: build.query({
      query: (search: string) => ({
        url: "books/search",
        params: {
          q: search,
        },
      }),
      providesTags: ["Book"],
    }),
    addBook: build.mutation<any, string>({
      query: (body) => ({
        url: "books/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useSearchBooksQuery,
  useGetBookQuery,
} = booksApi;
