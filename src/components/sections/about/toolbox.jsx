function SoftwareItem({ letter, title, level, color = "text-[#A8A8A8]" }) {
  return (
    <div className="flex items-center gap-4">
      {/* Icon Placeholder imitating Adobe icons */}
      <div className="w-16 h-16 bg-[#000005] rounded-[18px] flex items-center justify-center border border-white/10 shrink-0">
        <span className={`text-2xl font-bold ${color}`}>{letter}</span>
      </div>
      <div>
        <h4 className="text-xl font-bold text-[#1A1A23] dark:text-white">
          {title}
        </h4>
        <p className="text-[#1A1A23]/60 dark:text-white/60 font-medium">
          {level}
        </p>
      </div>
    </div>
  );
}

export function Toolbox() {
  const frontendTools = [
    {
      letter: "Re",
      title: "React / Next.js",
      level: "Expert",
      color: "text-[#61DAFB]",
    },
    {
      letter: "Ts",
      title: "TypeScript",
      level: "Expert",
      color: "text-[#3178C6]",
    },
    {
      letter: "Tw",
      title: "Tailwind CSS",
      level: "Expert",
      color: "text-[#06B6D4]",
    },
    {
      letter: "Gs",
      title: "GSAP / Framer",
      level: "Advanced",
      color: "text-[#88CE02]",
    },
    {
      letter: "Rd",
      title: "Redux / Zustand",
      level: "Expert",
      color: "text-[#764ABC]",
    },
    {
      letter: "Qu",
      title: "React Query",
      level: "Expert",
      color: "text-[#FF4154]",
    },
  ];

  const backendTools = [
    {
      letter: "No",
      title: "Node.js / Bun",
      level: "Expert",
      color: "text-[#339933]",
    },
    {
      letter: "Pg",
      title: "PostgreSQL",
      level: "Expert",
      color: "text-[#4169E1]",
    },
    {
      letter: "Go",
      title: "Go (Golang)",
      level: "Advanced",
      color: "text-[#00ADD8]",
    },
    {
      letter: "Dk",
      title: "Docker",
      level: "Experienced",
      color: "text-[#2496ED]",
    },
    {
      letter: "Ws",
      title: "AWS / Google Cloud",
      level: "Experienced",
      color: "text-[#FF9900]",
    },
    {
      letter: "Pr",
      title: "Prisma / Drizzle",
      level: "Expert",
      color: "text-[#2D3748]",
    },
  ];

  return (
    <section className="pb-24 px-4 lg:px-8 max-w-7xl mx-auto bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      <div className="space-y-6 mb-16 max-w-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#1A1A23] dark:text-white tracking-tight">
          Toolbox
        </h2>
        <p className="text-lg md:text-xl font-medium text-[#1A1A23]/80 dark:text-white/80 leading-relaxed">
          I leverage a modern, high-performance tech stack to build stable and
          scalable applications. My toolkit is focused on type-safety,
          performance, and developer experience.
        </p>
      </div>

      <div className="bg-white dark:bg-[#1A1A23] rounded-[40px] p-8 md:p-12 lg:p-16">
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-black uppercase text-[#1A1A23] dark:text-white mb-8 tracking-wide">
              Frontend Hub
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
              {frontendTools.map((tool, idx) => (
                <SoftwareItem key={idx} {...tool} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black uppercase text-[#1A1A23] dark:text-white mb-8 tracking-wide border-t border-[#1A1A23]/10 dark:border-white/10 pt-16">
              Backend & Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
              {backendTools.map((tool, idx) => (
                <SoftwareItem key={idx} {...tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
