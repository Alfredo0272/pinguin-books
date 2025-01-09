import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../models/book";
import { loadBookThunks } from "./book.thunk";

export type LoginState = "idle" | "logging" | "error";

export type BookState = {
  books: Book[];
  bookState: LoginState;
  error: string | null;
};

const initialState: BookState = {
  books: [],
  bookState: "idle",
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setCurrentBooks: (state: BookState, { payload }: PayloadAction<Book[]>) => {
      state.books = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loadBookThunks.pending, (state) => {
      state.bookState = "logging";
    });
    builder.addCase(loadBookThunks.fulfilled, (state, { payload }) => {
      state.books = payload;
      state.bookState = "idle";
    });
    builder.addCase(loadBookThunks.rejected, (state, { payload }) => {
      state.bookState = "error";
      state.error = payload as string;
    });
  },
});

export const { setCurrentBooks } = bookSlice.actions;
export default bookSlice.reducer;
