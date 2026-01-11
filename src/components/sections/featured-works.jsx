import { WorkCard } from "@/components/ui/work-card";
import { PrimaryButton } from "@/components/ui/primary-button";

export function FeaturedWorks() {
  const works = [
    {
      title: "Fintech Dashboard",
      category: "Full Stack Development  Next.js  TypeScript  Tailwind",
      className: "bg-[#e5e5e5]",
    },
    {
      title: "E-Commerce Hub",
      category: "Backend Engine  Node.js  PostgreSQL  Stripe API",
      className: "bg-[#8D7F71]",
    },
    {
      title: "HealthConnect AI",
      category: "AI Integration  React  Python  Cloud Architecture",
      className: "bg-[#21202C]",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-foreground tracking-tight">
            Featured
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-foreground tracking-tight">
            Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <PrimaryButton href="/work">All Projects</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
