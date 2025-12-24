export function ServiceCard({ icon: Icon, title, items }) {
  return (
    <div className="flex flex-col items-center text-center p-10 bg-white dark:bg-[#1A1A23] rounded-[40px] transition-all duration-300 group">
      {/* Icon Area */}
      <div className="mb-8 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-[#1A1A23] dark:text-white group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-12 h-12 stroke-[1.5]" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-black uppercase text-[#1A1A23] dark:text-white mb-6 max-w-[200px] leading-tight tracking-tight">
        {title}
      </h3>

      {/* List Items */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-base font-medium text-[#1A1A23]/70 dark:text-white/70"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
