import { describe, it, expect } from "vitest";
import { Library } from "../src/domain/Library";
import { User } from "../src/domain/User";
import { Book } from "../src/domain/Book";

describe("Return books", () => {
  it("should remove returned book from borrowed list and restore library stock", () => {
    const lib = new Library();
    const user = new User();

    lib.addBook(new Book("1", "Clean Code", 1));
    user.borrow(lib.borrowBook("1"));

    user.return(new Book("1", "Clean Code", 1));
    lib.returnBook(new Book("1", "Clean Code", 1));

    expect(user.getBorrowedBooks().length).toBe(0);
    expect(lib.getBooks()[0].copies).toBe(1);
  });

  it("should handle returning both books", () => {
    const lib = new Library();
    const user = new User();

    lib.addBook(new Book("1", "A", 1));
    lib.addBook(new Book("2", "B", 1));

    user.borrow(lib.borrowBook("1"));
    user.borrow(lib.borrowBook("2"));

    user.return(new Book("1", "A", 1));
    lib.returnBook(new Book("1", "A", 1));

    user.return(new Book("2", "B", 1));
    lib.returnBook(new Book("2", "B", 1));

    expect(user.getBorrowedBooks().length).toBe(0);
    expect(lib.getBooks().length).toBe(2);
  });
});
