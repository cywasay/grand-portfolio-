"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Navbar } from "@/components/modules/navbar";
import { ModeToggle } from "@/components/theme";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Assuming Navbar uses Link, used here for mobile links if needed

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 py-6 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Navbar />
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-2xl p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            <Navbar className="flex-col items-start gap-4" />
          </div>
          <div className="h-px bg-border w-full" />
          <div className="flex justify-start">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
