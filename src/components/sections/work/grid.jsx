import { WorkCard } from "@/components/ui/work-card";
import { ChevronDown } from "lucide-react";

export function WorkGrid() {
  const works = [
    {
      title: "Abstract Factory",
      category: "UI/UX Design  Mobile App  Design System",
      className: "bg-[#e5e5e5]",
    },
    {
      title: "Koov",
      category: "Branding  Visual Identity  Packaging",
      className: "bg-[#8D7F71]",
    },
    {
      title: "Urban Dynamics",
      category: "Illustration  Art Direction  Editorial",
      className: "bg-[#21202C]",
    },
    {
      title: "Skaelia",
      category: "Web Design  Development  SEO",
      className: "bg-[#1A1A23]",
    },
    {
      title: "Peek'in",
      category: "Product Design  Strategy  Growth",
      className: "bg-[#2A3B90]",
    },
    {
      title: "Next Gen",
      category: "Identity  Motion  Social",
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
