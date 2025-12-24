export function LanguageSwitcher() {
  return (
    <div className="hidden md:flex items-center gap-3 text-sm font-bold uppercase">
      <span className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
        FR
      </span>
      <span className="flex items-center justify-center rounded-full bg-[#1A1A23] text-white dark:bg-white dark:text-[#1A1A23] px-2 py-1 min-w-[32px] cursor-default">
        EN
      </span>
    </div>
  );
}
