import { BookResponse } from "../../models/book";

export class ApiBooks {
  apiUrl: string;
  constructor() {
    this.apiUrl = "https://openlibrary.org/search.json?q=";
  }

  async getBooks(query = "historia."): Promise<BookResponse> {
    const url = this.apiUrl + query;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching books");
    }
    const data = await response.json();
    return data;
  }
}
