import "./StatCard.css";

type StatCardProps = {
  icon: string;
  alt: string;
  title: string;
  value: string;
  colorClass: "red" | "green" | "blue" | "orange";
};

export default function StatCard({
  icon,
  alt,
  title,
  value,
  colorClass,
}: StatCardProps) {
  return (
    <div className="stat-card">
      <span className="stat-title">
        <img src={icon} alt={alt} className="small-icon" />
        {title}
      </span>

      <strong className={colorClass}>{value}</strong>
    </div>
  );
}