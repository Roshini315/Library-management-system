import { useState } from "react";
import { Library } from "./domain/Library";
import { Book } from "./domain/Book";
import { User } from "./domain/User";

const library = new Library();
library.addBook(new Book("1", "Clean Code", 1));
library.addBook(new Book("2", "Refactoring", 1));

const user = new User();

function App() {
  const [, refresh] = useState(0);

  const books = library.getBooks();
 const borrowed = user.getBorrowedBooks();

  const returnBook = (book: Book) => {
  user.return(book);
  library.returnBook(book);
  refresh(v => v + 1);
};

  const borrowBook = (id: string) => {
  const book = library.borrowBook(id);
  user.borrow(book);
  refresh(v => v + 1);
};


  return (
    <div style={{ padding: 20 }}>
      <h2>Library</h2>
      {books.length === 0 && <p>No books available</p>}
      {books.map(book => (
        <div key={book.id}>
          {book.title}
          <button onClick={() => borrowBook(book.id)}>Borrow</button>
        </div>
      ))}

      <h2>Borrowed Books</h2>
      {borrowed.map(book => (
        <div key={book.id}>
          {book.title}
          <button onClick={() => returnBook(book)}>Return</button>
  </div>
))}
    </div>
  );
}

export default App;
