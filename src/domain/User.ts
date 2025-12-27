import { Book } from "./book";

export class User {
  private borrowedBooks: Book[] = [];
  private readonly BORROW_LIMIT = 2;

  borrow(book: Book): void {
    if (this.borrowedBooks.length >= this.BORROW_LIMIT) {
      throw new Error("Borrow limit reached");
    }
    this.borrowedBooks.push(book);
  }

  getBorrowedBooks(): Book[] {
    return this.borrowedBooks;
  }
}
