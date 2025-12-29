import "./AdminPanel.css";
import { useState } from "react";
import { useLibraryContext } from "../context/LibraryContext";
import { Book } from "../domain/Book";

export default function AdminPanel() {
  const [title, setTitle] = useState("");
  const [copies, setCopies] = useState(1);
  const [image, setImage] = useState("");
  const { library } = useLibraryContext();

  const add = () => {
    if (!title || !copies) return alert("Fill all fields");
    library.addBook(new Book(Date.now().toString(), title, copies, image));
    alert("Book added!");
    setTitle(""); setCopies(1); setImage("");
  };

  return (
    <div className="admin-panel">
      <h2>Add New Book</h2>

      <input placeholder="Book Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <input type="number" min="1" value={copies} onChange={e => setCopies(Number(e.target.value))} />

      <button onClick={add}>Add Book</button>
    </div>
  );
}
