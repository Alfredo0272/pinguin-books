import { loadBookThunks } from "./book.thunk";
import { BookState } from "./book.slice";
import bookReducer from "./book.slice";

describe("Given the book reducers", () => {
  const initialState: BookState = {
    books: [],
    bookState: "idle",
    error: null,
  };

  describe("When we call loadBookThunks.fulfilled", () => {
    test("Then the state should update with the books", () => {
      const action = {
        type: loadBookThunks.fulfilled.type,
        payload: [{ id: "1", title: "Test Book" }],
      };
      const result = bookReducer(initialState, action);
      expect(result.books).toEqual([{ id: "1", title: "Test Book" }]);
      expect(result.bookState).toEqual("idle");
    });
  });

  describe("When we call loadBookThunks.pending", () => {
    test("Then the state should set bookState to 'logging'", () => {
      const action = {
        type: loadBookThunks.pending.type,
      };
      const result = bookReducer(initialState, action);
      expect(result.books).toEqual([]);
      expect(result.bookState).toEqual("logging");
    });
  });

  describe("When we call loadBookThunks.rejected", () => {
    test("Then the state should set bookState to 'error'", () => {
      const action = {
        type: loadBookThunks.rejected.type,
      };
      const result = bookReducer(initialState, action);
      expect(result.books).toEqual([]);
      expect(result.bookState).toEqual("error");
    });
  });
});
