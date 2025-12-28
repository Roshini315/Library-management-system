import { useLibraryContext } from "../context/LibraryContext";
import { useAuth } from "../auth/AuthContext";
import BookCard from "../components/BookCard";

export default function Borrowed() {
  const { user } = useAuth();
  const { userBorrowed, returnBook } = useLibraryContext();

  const items = userBorrowed(user!.name);

  return (
    <div className="books-container">
      <h1 className="title">📚 Your Borrowed Books</h1>

      <div className="books-grid">
        {items.map(book => (
          <BookCard
            key={book.id}
            book={book}
            action={() => returnBook(user!.name, book.id)}
            actionText="Return"
          />
        ))}
      </div>
    </div>
  );
}
