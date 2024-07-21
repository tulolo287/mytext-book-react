import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../../api/books";
import { booksReducer } from "../slices/books";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
