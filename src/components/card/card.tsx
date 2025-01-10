import { Book } from "../../models/book";
import "./card.css";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const cover: string = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/100";

  const authorName =
    book.author_name && book.author_name.length > 0
      ? book.author_name.join(", ")
      : "Autor desconocido";

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={cover} alt={book.title} />
      </div>
      <div className="data-container">
        <h2>{book.title}</h2>
      </div>
      <p>{authorName}</p>
    </div>
  );
}
