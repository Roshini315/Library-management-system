import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import LibraryBg from "../assets/library2.jpg";
import "./Adminlogin.css";

export default function Adminlogin() {
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass !== "admin123") return alert("Wrong Password");
    login("Admin", "admin");
    nav("/admin");
  };

  return (
    <div
      className="admin-bg"
      style={{ backgroundImage: `url(${LibraryBg})` }}
    >
      <div className="admin-box">
        <h2 className="admin-title">🔐 Admin Login</h2>

        <form onSubmit={submit} className="login-form">
          <input
            type="password"
            placeholder="Enter Password"
            className="login-input"
            onChange={(e) => setPass(e.target.value)}
          />

          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
