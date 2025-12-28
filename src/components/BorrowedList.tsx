export default function BorrowedList({ user, returnBook }: any) {
  const borrowed = user.getBorrowedBooks();

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-xl font-semibold mb-4">Your Borrowed Books</h2>

      <ul className="flex flex-col gap-3">
        {borrowed.map((b: any) => (
          <li key={b.id} className="flex justify-between bg-white p-3 rounded shadow">
            {b.title}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => returnBook(b)}
            >
              Return
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
