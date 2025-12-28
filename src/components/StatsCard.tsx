import "./StatsCard.css";

export default function StatsCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
