import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: true,
  error: false,
  totalPages: 1,
};

export const booksSlices = createSlice({
  name: "books",
  initialState,
  reducers: {
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setTotalPages } = booksSlices.actions;
export const booksReducer = booksSlices.reducer;
