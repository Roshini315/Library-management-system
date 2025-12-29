import { Book } from "./Book";

export class User {
  private borrowedBooks: Book[] = [];
  private readonly BORROW_LIMIT = 2;

  borrow(book: Book): void {
    if (this.borrowedBooks.length >= this.BORROW_LIMIT) {
      throw new Error("Borrow limit reached");
    }

    if (this.borrowedBooks.some(b => b.id === book.id)) {
      throw new Error("This book is already borrowed");
    }

    this.borrowedBooks.push(book);
  }

  return(book: Book): void {
  const index = this.borrowedBooks.findIndex(b => b.id === book.id);
  if (index !== -1) {
    this.borrowedBooks.splice(index, 1);
  }
}


  getBorrowedBooks(): Book[] {
    return [...this.borrowedBooks]; 
  }
}
