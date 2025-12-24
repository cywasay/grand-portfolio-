export function WorkCard({ title, category, className = "" }) {
  return (
    <div className="group flex flex-col gap-6 w-full p-3 rounded-[32px] bg-white dark:bg-[#1A1A23] transition-all duration-300 hover:shadow-xl cursor-pointer">
      {/* Image Area */}
      <div
        className={`relative w-full h-[50vh] rounded-[24px] overflow-hidden ${className} transition-transform duration-500 group-hover:scale-[0.98]`}
      >
        {/* We keep the color background passed via className as the 'Image' placeholder */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Text Content Area - Below Image */}
      <div className="flex flex-col gap-2 px-3 pb-4">
        <h3 className="text-3xl font-bold text-foreground transition-colors group-hover:text-[#F95D42]">
          {title}
        </h3>
        <p className="text-base font-medium text-muted-foreground leading-relaxed">
          {category}
        </p>
      </div>
    </div>
  );
}
