import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Book } from "@/lib/types";

export interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      if (!state.books.some((book) => book.id === action.payload.id)) {
        state.books.push(action.payload);
      }
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
