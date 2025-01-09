import { useCallback, useEffect, useMemo, useState } from "react";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ApiBooks } from "../components/data/api.fetch";
import { loadBookThunks } from "../slice/book.thunk";
import { Book } from "../models/book";

export function UseBooks() {
  const books = useSelector((state: RootState) => state.bookState.books);
  const dispatch = useDispatch<AppDispatch>();
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error] = useState<string | null>(null);
  const [isLoading] = useState<boolean>(false);

  const repo = useMemo(() => new ApiBooks(), []);

  const loadBooks = useCallback(() => {
    dispatch(loadBookThunks(repo));
  }, [dispatch, repo]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (book.author_name &&
            book.author_name.some((author) =>
              author.toLowerCase().includes(searchTerm.toLowerCase())
            ))
      );
      setFilteredBooks(filtered);
    }
  }, [books, searchTerm]);

  return { loadBooks, filteredBooks, setSearchTerm, error, isLoading };
}
