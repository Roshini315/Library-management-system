import "./AdminDashboard.css";
import StatsCard from "../components/StatsCard";
import AdminPanel from "../components/AdminPanel";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1 className="admin-title">📊 Admin Dashboard</h1>

      <div className="stats-grid">
        <StatsCard title="Total Books" value="48" />
        <StatsCard title="Borrowed" value="21" />
        <StatsCard title="Users" value="105" />
      </div>

      <hr className="divider" />

      <AdminPanel />
    </div>
  );
}
