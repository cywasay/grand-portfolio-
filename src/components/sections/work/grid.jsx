import { WorkCard } from "@/components/ui/work-card";
import { ChevronDown } from "lucide-react";

export function WorkGrid() {
  const works = [
    {
      title: "Fintech Dashboard",
      category: "React  Next.js  TypeScript  Tailwind",
      className: "bg-[#e5e5e5]",
    },
    {
      title: "E-Commerce Hub",
      category: "Node.js  PostgreSQL  Stripe  Redis",
      className: "bg-[#8D7F71]",
    },
    {
      title: "HealthConnect AI",
      category: "Python  FastAPI  React  OpenAI",
      className: "bg-[#21202C]",
    },
    {
      title: "Skaelia SaaS",
      category: "Full Stack  tRPC  Drizzle  Auth.js",
      className: "bg-[#1A1A23]",
    },
    {
      title: "DevPortfolio Core",
      category: "Next.js  Framer Motion  Three.js",
      className: "bg-[#2A3B90]",
    },
    {
      title: "Next Gen Analytics",
      category: "Go  InfluxDB  Grafana  Docker",
      className: "bg-[#E0E0E0]",
    },
  ];

  return (
    <section className="pb-24 lg:pb-32 px-8 lg:px-16 max-w-7xl mx-auto bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-16">
        <button className="flex items-center gap-2 bg-white dark:bg-zinc-800 px-6 py-3 rounded-full text-[#1A1A23] dark:text-white font-bold shadow-sm hover:shadow-md transition-all">
          Industry: <span className="font-black">All</span>{" "}
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 bg-white dark:bg-zinc-800 px-6 py-3 rounded-full text-[#1A1A23] dark:text-white font-bold shadow-sm hover:shadow-md transition-all">
          Deliverable: <span className="font-black">All</span>{" "}
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  );
}
