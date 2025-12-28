import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./NavBar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">📚 LibrarySystem</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/borrowed">Borrowed</Link></li>
        {user?.role === "admin" && <li><Link to="/admin">Admin</Link></li>}
      </ul>

      <div className="nav-right">
        <span className="username">{user?.name}</span>
        <button className="btn-logout" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
