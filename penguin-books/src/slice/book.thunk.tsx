import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../models/book";
import { ApiBooks } from "../components/data/api.fetch";

export const loadBookThunks = createAsyncThunk<Book[], ApiBooks>(
  "loadBooks",
  async (repo: ApiBooks) => {
    const response = await repo.getBooks();
    return response.docs;
  }
);
