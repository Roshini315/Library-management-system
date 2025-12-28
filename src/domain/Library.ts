import { useState } from "react";
import { Book } from "./Book";

export class Library {
  private books: Book[] = [];
  private borrowed: Record<string, Book[]> = {};   // 👈 Track borrowed per user

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

  // ✅ Borrow Book — reduce copies + add to borrowed list
  borrowBook(user: string, id: string): void {
    const book = this.books.find(b => b.id === id);
    if (!book) return;

    if (book.copies > 0) {
      book.copies--;
    }

    if (!this.borrowed[user]) this.borrowed[user] = [];
    this.borrowed[user].push(new Book(book.id, book.title, 1, book.image));
  }

  // 📌 Get books borrowed by a specific user
  getBorrowedBy(user: string): Book[] {
    return this.borrowed[user] || [];
  }

  // 🔄 Return a book — remove from borrowed list + increase library stock
  returnBook(user: string, id: string): void {
    if (!this.borrowed[user]) return;

    this.borrowed[user] = this.borrowed[user].filter(b => b.id !== id);

    const libBook = this.books.find(b => b.id === id);
    if (libBook) libBook.copies++;
  }
}


// =============================
// ❤️ REACT HOOK – used inside UI
// =============================
export function useLibrary() {
  const [library] = useState(() => {
    const lib = new Library();
    lib.addBook(new Book("1", "Clean Code", 3, "/book1.jpg"));
    lib.addBook(new Book("2", "Refactoring", 2, "/book2.jpg"));
    lib.addBook(new Book("3", "Design Patterns", 4, "/book3.jpg"));
    return lib;
  });

  const [, forceRefresh] = useState({}); // 👈 dummy state to trigger UI rerender

  const borrow = (user: string, id: string) => {
    library.borrowBook(user, id);
    forceRefresh({});  // 👈 re-render UI
  };

  const returnBook = (user: string, id: string) => {
    library.returnBook(user, id);
    forceRefresh({});  // 👈 re-render UI
  };

  const userBorrowed = (user: string): Book[] => {
    return library.getBorrowedBy(user);
  };

  return { library, borrow, returnBook, userBorrowed };
}
