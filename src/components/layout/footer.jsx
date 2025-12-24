import Link from "next/link";
import { Dribbble, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
        {/* Left Side: Social Icons */}
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Dribbble className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.216.354-.672.468-1.026.252-2.856-1.746-6.45-2.142-10.686-1.176-.408.096-.816-.156-.912-.564-.096-.408.156-.816.564-.912 4.632-1.056 8.604-.6 11.784 1.344.354.216.468.672.252 1.026zm1.47-3.252c-.276.444-.852.588-1.296.312-3.264-2.004-8.232-2.592-12.084-1.428-.504.144-1.032-.144-1.176-.648-.144-.504.144-1.032.648-1.176 4.392-1.332 9.876-.672 13.596 1.62.444.276.588.852.312 1.296zm.132-3.372C15.156 8.244 8.544 8.016 4.704 9.18 4.104 9.36 3.48 9.024 3.3 8.424c-.18-.6.156-1.224.756-1.404 4.416-1.344 11.736-1.08 15.696 1.272.54.324.72.996.396 1.536-.324.54-.996.72-1.536.396z" />
            </svg>
          </Link>
        </div>

        {/* Right Side: Copyright & Links */}
        <div className="flex flex-col items-center text-center md:items-end md:text-right gap-2">
          <p className="text-base text-foreground/80 font-medium">
            {currentYear} All rights reserved. Design & Code by P.Factory.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-base font-bold underline underline-offset-4 decoration-2 hover:text-[#F95D42] transition-colors"
            >
              Legal information
            </Link>
            <Link
              href="#"
              className="text-base font-bold underline underline-offset-4 decoration-2 hover:text-[#F95D42] transition-colors"
            >
              Don't click here
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
