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
  const designTools = [
    {
      letter: "Ai",
      title: "Illustrator",
      level: "Expert",
      color: "text-[#FF9A00]",
    },
    {
      letter: "Ps",
      title: "Photoshop",
      level: "Expert",
      color: "text-[#31A8FF]",
    },
    {
      letter: "Id",
      title: "InDesign",
      level: "Expert",
      color: "text-[#FF3366]",
    },
    {
      letter: "Lr",
      title: "Lightroom",
      level: "Experienced",
      color: "text-[#31A8FF]",
    },
    {
      letter: "Pr",
      title: "Premiere Pro",
      level: "Experienced",
      color: "text-[#9999FF]",
    },
    {
      letter: "Ae",
      title: "After Effects",
      level: "Experienced",
      color: "text-[#9999FF]",
    },
  ];

  return (
    <section className="pb-24 px-4 lg:px-8 max-w-7xl mx-auto bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      <div className="space-y-6 mb-16 max-w-3xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-[#1A1A23] dark:text-white tracking-tight">
          Toolbox
        </h2>
        <p className="text-lg md:text-xl font-medium text-[#1A1A23]/80 dark:text-white/80 leading-relaxed">
          In order to turn an idea into a concrete project, I draw on my areas
          of expertise, all the while exploring new fields with boundless
          curiosity.
        </p>
      </div>

      <div className="bg-white dark:bg-[#1A1A23] rounded-[40px] p-8 md:p-12 lg:p-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-black uppercase text-[#1A1A23] dark:text-white mb-8 tracking-wide">
              Design
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
              {designTools.map((tool, idx) => (
                <SoftwareItem key={idx} {...tool} />
              ))}
            </div>
          </div>
          {/* You can add more categories (Dev, 3D, etc) here later if needed */}
        </div>
      </div>
    </section>
  );
}
