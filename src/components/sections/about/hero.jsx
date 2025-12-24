import Image from "next/image";
import { Download } from "lucide-react";

export function AboutHero() {
  return (
    <section className="min-h-screen flex bg-[#F3F2EF] dark:bg-background transition-colors duration-300 pt-40 lg:pt-52 pb-20">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-full">
            <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden">
              {/* Using a placeholder since I don't have the user's specific photo key yet, 
                 but matching the 'rounded' style requested. 
                 Ideally this would be the photo of 'Paul'. */}
              <div className="absolute inset-0 bg-[#E5E5E5] dark:bg-zinc-800" />
              <Image
                src="/hero-image.png"
                alt="Paul - Art Director"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1A1A23] dark:text-foreground">
                Paul, 34 Years Old
              </h2>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-[#1A1A23] dark:border-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 md:w-6 md:h-6 rotate-45"
                  >
                    <path d="M12 2v4" />
                    <path d="m16.2 7.8 2.9-2.9" />
                    <path d="M18 12h4" />
                    <path d="m16.2 16.2 2.9 2.9" />
                    <path d="M12 18v4" />
                    <path d="m7.8 16.2-2.9 2.9" />
                    <path d="M2 12h4" />
                    <path d="m7.8 7.8-2.9-2.9" />
                  </svg>
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#1A1A23] dark:text-foreground">
                  Art Director
                </h1>
              </div>
            </div>

            <div className="space-y-6 text-lg md:text-xl font-medium text-[#1A1A23]/80 dark:text-muted-foreground leading-relaxed">
              <p>
                My name is Paul, a passionate creative and a fan of
                well-organized design systems. With 13 years of experience in
                Art Direction, UI/UX Design and Illustration, I specialize in
                crafting stunning visual identities, interfaces, web products,
                and scalable design systems.
              </p>
              <p>
                As a front-end developer (HTML/CSS/JS), I anticipate technical
                constraints to design realistic projects, from mock-ups to
                integration.
              </p>
              <p>
                I have delivered 50+ projects from start to finish in a wide
                range of industries.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A23] dark:bg-white text-white dark:text-[#1A1A23] font-black uppercase tracking-wider rounded-full text-lg transition-transform hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Mask Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
