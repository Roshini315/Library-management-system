import { Book } from "./book";

export class Library {
  private books: Book[] = [];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  removeBook(bookId: string): Book {
    const index = this.books.findIndex(book => book.id === bookId);
    if (index === -1) {
      throw new Error("Book not found");
    }
    return this.books.splice(index, 1)[0];
  }
}
