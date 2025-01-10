import { useEffect, useState } from "react";
import { UseBooks } from "../../hook/useBooks";
import { BookCard } from "../card/card";
import "./header.css";

export function Header() {
  const { loadBooks, filteredBooks, setSearchTerm, isLoading, error } =
    UseBooks();
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(search);
  };

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return (
    <header>
      <div className="search-container">
        <h1>Open Library Marketplace</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar libros..."
            className="search"
          />
          <button type="submit" aria-label="Buscar libros">
            Search
          </button>
        </form>
      </div>
      <div className="books">
        {isLoading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : filteredBooks.length > 0 ? (
          <div>
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p>No se encontraron libros para "{search}".</p>
        )}
      </div>
    </header>
  );
}
