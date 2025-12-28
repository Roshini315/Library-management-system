import { createContext, useContext, useState } from "react";
import { Library } from "../domain/Library";
import { Book } from "../domain/Book";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";

type LibContextType = {
  library: Library;
  borrow: (user: string, id: string) => void;
  returnBook: (user: string, id: string) => void;
  userBorrowed: (user: string) => Book[];
};

const LibraryContext = createContext<LibContextType | null>(null);

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [lib] = useState(() => {
    const l = new Library();
    l.addBook(new Book("1","Clean Code",3, book1));
    l.addBook(new Book("2","Refactoring",2, book2));
    l.addBook(new Book("3","Design Patterns",4, book3));
    return l;
  });

  const [, forceRender] = useState({});

  const borrow = (user: string, id: string) => {
    lib.borrowBook(user, id);
    forceRender({});
  };

  const returnBook = (user: string, id: string) => {
    lib.returnBook(user, id);
    forceRender({});
  };

  const userBorrowed = (user: string) => lib.getBorrowedBy(user);

  return (
    <LibraryContext.Provider value={{ library: lib, borrow, returnBook, userBorrowed }}>
      {children}
    </LibraryContext.Provider>
  );
}

export const useLibraryContext = () => useContext(LibraryContext)!;
