import "./AdminDashboard.css";
import StatsCard from "../components/StatsCard";
import AdminPanel from "../components/AdminPanel";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const { logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/admin-login");
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1 className="admin-title">📊 Admin Dashboard</h1>
        <button className="btn-admin-logout" onClick={handleLogout}>Logout</button>
      </header>

      <section className="stats-grid">
        <StatsCard title="Total Books" value="48" />
        <StatsCard title="Borrowed" value="21" />
        <StatsCard title="Users" value="105" />
      </section>

      <hr className="divider" />

      <AdminPanel />
    </div>
  );
}
