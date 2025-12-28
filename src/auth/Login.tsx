import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";
import "./Login.css";            // <-- import our CSS
import bg from "../assets/library-bg.jpg";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name, "user");
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-box">
        <h1 className="title">📚 Library Login</h1>

        <form onSubmit={submit}>
          <label>User Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="admin-text">
          Admin? <Link to="/admin-login" className="admin-link">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
}
