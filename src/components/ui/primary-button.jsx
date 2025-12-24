import Link from "next/link";

export function PrimaryButton({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-12 py-5 bg-[#1A1A23] dark:bg-white text-white dark:text-[#1A1A23] font-black uppercase tracking-wider rounded-[30px] text-xl transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </Link>
  );
}
