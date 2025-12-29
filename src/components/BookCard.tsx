
import type { Book } from "../domain/Book";

type BookCardProps = {
  book: Book;
  action: () => void;
  actionText: string;
};

export default function BookCard({ book, action, actionText }: BookCardProps) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />

      <div className="content">
        <h3>{book.title}</h3>
        <p>Copies: {book.copies}</p>

        <button
          disabled={book.copies <= 0}
          onClick={() => action()}
          className="borrow-btn">
          {actionText}
        </button>

      </div>
    </div>
  );
}
