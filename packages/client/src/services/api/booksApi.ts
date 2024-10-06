import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    getBooks: build.query<any, any>({
      query: ({ skip, limit }) => `products?skip=${skip}&limit=${limit}`,
    }),
    getBook: build.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
