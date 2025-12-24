import Link from "next/link";

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:text-foreground transition-colors font-medium text-foreground/90"
    >
      {children}
    </Link>
  );
}
