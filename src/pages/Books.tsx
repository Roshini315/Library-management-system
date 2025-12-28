import "./Books.css";
import BookCard from "../components/BookCard";
import { useLibraryContext } from "../context/LibraryContext";
import { useAuth } from "../auth/AuthContext";

export default function Books() {
  const { library, borrow } = useLibraryContext();
  const { user } = useAuth();

  const handleBorrow = (id: string) => {
    borrow(user!.name, id);  // reduces copies + updates UI
  };

  return (
    <div className="books-container">
      <h1 className="title">📚 Available Books</h1>

      <div className="books-grid">
        {library.getBooks().map(book => (
          <BookCard
            key={book.id}
            book={book}
            action={() => handleBorrow(book.id)}
            actionText="Borrow"
          />
        ))}
      </div>
    </div>
  );
}
