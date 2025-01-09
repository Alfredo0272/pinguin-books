import { BookResponse } from "../../models/book";

export class ApiBooks {
  apiUrl: string;
  constructor() {
    this.apiUrl = "https://openlibrary.org/search?q=historia";
  }

  async getBooks(url = this.apiUrl): Promise<BookResponse> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching books");
    }
    return response.json();
  }
}
