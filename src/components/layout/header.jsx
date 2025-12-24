"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Navbar } from "@/components/modules/navbar";
import { ModeToggle } from "@/components/theme";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Mobile Menu (Sheet) */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-foreground">
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="text-2xl font-black uppercase">
                    Menu
                  </SheetTitle>
                </SheetHeader>

                <div
                  className="flex flex-col gap-6"
                  onClick={() => setIsOpen(false)}
                >
                  <Navbar className="flex flex-col items-start gap-6 text-xl" />

                  <div className="h-px bg-border w-full" />

                  <div className="flex justify-start">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
