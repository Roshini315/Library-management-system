import BookCard from "./BookCard";

export default function LibraryView({ library, borrow }: any) {
  const books = library.getBooks();

  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {books.map((book: any) => (
        <BookCard key={book.id} book={book} onBorrow={borrow} />
      ))}
      {books.length === 0 && <p className="text-gray-500">No books available</p>}
    </div>
  );
}
