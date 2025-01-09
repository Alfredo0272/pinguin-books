import { Book } from "../../models/book";
import { ApiBooks } from "./api.fetch";

describe("Given apiRepo class", () => {
  describe("When we instantiate it and response is ok", () => {
    let jsonMock = jest.mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      globalThis.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test("Then metod  GetCharacters shoul be used", async () => {
      const repo = new ApiBooks();
      const exceptedBooks: Book[] = [];
      const result = await repo.getBooks();
      expect(result).toEqual(exceptedBooks);
      expect(jsonMock).toHaveBeenCalled();
    });
  });
});

describe("When we instantiate it and response is bad", () => {
  beforeEach(() => {
    globalThis.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    });
  });
  test("Then metod  GetCharacters shoul be used", async () => {
    const repo = new ApiBooks();
    await expect(repo.getBooks()).rejects.toThrow("Error fetching books");
  });
});
