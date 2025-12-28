import { useState } from "react";
import { Book } from "../domain/Book";

export default function AdminPanel({ library }: any) {
  const [title, setTitle] = useState("");
  const [copies, setCopies] = useState(1);
  const [image, setImage] = useState("");

  const addBook = () => {
    library.addBook(new Book(Date.now()+"", title, copies, image));
    setTitle("");
    setCopies(1);
    setImage("");
  };

  return (
    <div className="p-8">
      <h2 className="font-bold text-2xl mb-4">Admin Panel</h2>

      <div className="flex flex-col gap-3 w-80 bg-white shadow p-4 rounded">
        <input className="border p-2" placeholder="Book Title" value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input className="border p-2" type="number" min="1"
          value={copies} onChange={(e) => setCopies(+e.target.value)}
        />
        <input className="border p-2" placeholder="Image URL"
          value={image} onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={addBook}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
          Add Book
        </button>
      </div>
    </div>
  );
}
