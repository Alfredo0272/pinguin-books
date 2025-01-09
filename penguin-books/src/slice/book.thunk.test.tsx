import { ApiBooks } from "../components/data/api.fetch";
import { Book } from "../models/book";

describe("Given the book Thunks", () => {
  describe("When we call loadBookThunks", () => {
    let jsonMock = jest.mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      globalThis.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test("Then the method GetBooks should be used", async () => {
      const repo = new ApiBooks();
      const expectedBooks: Book[] = [];
      const result = await repo.getBooks();
      expect(result).toEqual(expectedBooks);
      expect(jsonMock).toHaveBeenCalled();
    });
  });
});
