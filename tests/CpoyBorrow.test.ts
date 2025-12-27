import { describe, it, expect } from "vitest";
import { Library } from "../src/domain/Library";
import { User } from "../src/domain/User";
import { Book } from "../src/domain/Book";

describe("Multiple copies", () => {
  it("should borrow only 1 copy and keep others", () => {
    const lib = new Library();
    lib.addBook(new Book("1", "Clean Code", 2));
    const user = new User();

    user.borrow(lib.borrowBook("1"));

    expect(lib.getBooks()[0].copies).toBe(1);
    expect(user.getBorrowedBooks().length).toBe(1);
  });

  it("should NOT allow borrowing same book twice", () => {
    const lib = new Library();
    lib.addBook(new Book("1", "Clean Code", 3));
    const user = new User();

    user.borrow(lib.borrowBook("1"));
    expect(() => user.borrow(lib.borrowBook("1"))).toThrow();
  });
});
