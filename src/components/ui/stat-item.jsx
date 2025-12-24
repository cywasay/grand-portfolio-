export function StatItem({ value, labelLine1, labelLine2 }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="flex h-20 w-20 items-center justify-center rounded-[30px] bg-[#1A1A23] dark:bg-[#302E3C] text-white transition-all duration-300 group-hover:bg-[#F95D42] group-hover:scale-105">
        <span className="text-[40px] font-bold">{value}</span>
      </div>
      <div className="flex flex-col text-base font-bold text-foreground leading-tight">
        <span>{labelLine1}</span>
        <span>{labelLine2}</span>
      </div>
    </div>
  );
}
