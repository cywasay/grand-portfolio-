import { StatItem } from "@/components/ui/stat-item";

export function HeroStats() {
  const stats = [
    { value: "50", line1: "projects", line2: "completed" },
    { value: "13", line1: "years of", line2: "experience" },
  ];

  return (
    <div className="flex flex-wrap gap-8 pt-4">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          value={stat.value}
          labelLine1={stat.line1}
          labelLine2={stat.line2}
        />
      ))}
    </div>
  );
}
