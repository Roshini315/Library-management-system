import { Book } from "./Book";

export class Library {
  private books: Book[] = [];

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

  borrowBook(id: string): Book {
    const book = this.books.find(b => b.id === id);
    if (!book) {
      throw new Error("Book not found");
    }

    if (book.copies > 1) {
      book.copies--;
      return new Book(book.id, book.title, 1);
    }

    return this.books.splice(
      this.books.findIndex(b => b.id === id),
      1
    )[0];
  }

  returnBook(book: Book): void {
  const existing = this.books.find(b => b.id === book.id);
  if (existing) {
    existing.copies++;
  } else {
    this.books.push(new Book(book.id, book.title, 1));
  }
}

}
