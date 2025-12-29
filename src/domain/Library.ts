import { useState } from "react";
import { Book } from "./Book";

export class Library {
  private books: Book[] = [];
  private borrowed: Record<string, Book[]> = {}; // Track borrowed per user

  addBook(book: Book): void {
    const existing = this.books.find(b => b.id === book.id);
    if (existing) {
      existing.copies += book.copies;
      return;
    }
    this.books.push(book);
  }

  getBooks(): Book[] {
    return this.books;
  }

  borrowBook(user: string, id: string): void {
    if (!this.borrowed[user]) this.borrowed[user] = [];

    if (this.borrowed[user].find(b => b.id === id)) {
      alert("⚠️ You already borrowed this book.");
      return;
    }

    if (this.borrowed[user].length >= 2) {
      alert("⚠️ Borrowing limit reached — Maximum 2 books allowed.");
      return;
    }

    const book = this.books.find(b => b.id === id);
    if (!book) return;

    if (book.copies > 1) {
      book.copies--;
      this.borrowed[user].push(new Book(book.id, book.title, 1, book.image));
      return;
    }

    this.books = this.books.filter(b => b.id !== id);
    this.borrowed[user].push(new Book(book.id, book.title, 1, book.image));
  }

  getBorrowedBy(user: string): Book[] {
    return this.borrowed[user] || [];
  }

  returnBook(user: string, id: string): void {
    if (!this.borrowed[user]) return;

    const index = this.borrowed[user].findIndex(b => b.id === id);
    if (index === -1) return;

    const returned = this.borrowed[user][index];
    this.borrowed[user].splice(index, 1);

    const libraryBook = this.books.find(b => b.id === id);
    if (libraryBook) {
      libraryBook.copies++;
    } else {
      this.books.push(new Book(returned.id, returned.title, 1, returned.image));
    }
  }
}



export function useLibrary() {
  const [library] = useState(() => {
    const lib = new Library();
    lib.addBook(new Book("1", "Clean Code", 3, "/book1.jpg"));
    lib.addBook(new Book("2", "Refactoring", 2, "/book2.jpg"));
    lib.addBook(new Book("3", "Design Patterns", 4, "/book3.jpg"));
    return lib;
  });

  const [, forceRefresh] = useState({}); 

  const borrow = (user: string, id: string) => {
    library.borrowBook(user, id);
    forceRefresh({});
  };

  const returnBook = (user: string, id: string) => {
    library.returnBook(user, id);
    forceRefresh({});
  };

  const userBorrowed = (user: string): Book[] => {
    return library.getBorrowedBy(user);
  };

  return { library, borrow, returnBook, userBorrowed };
}
