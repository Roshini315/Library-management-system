import { Library } from "./domain/Library";
import { Book } from "./domain/Book";

const library = new Library();

function App() {
  const books = library.getBooks();

  return (
    <div style={{ padding: 20 }}>
      <h2>Library</h2>

      {books.length === 0 && <p>No books available</p>}

      {books.map(book => (
        <div key={book.id}>
          {book.title} ({book.copies})
        </div>
      ))}
    </div>
  );
}

export default App;
