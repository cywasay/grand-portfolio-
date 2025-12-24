import { NavLink } from "@/components/ui/nav-link";

export function Navbar({ className = "flex items-center gap-8" }) {
  const navItems = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <NavLink key={item.label} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
