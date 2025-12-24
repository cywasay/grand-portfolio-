import Image from "next/image";
import { HeroStats } from "@/components/modules/hero-stats";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-foreground">
                Welcome to the
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black uppercase text-foreground">
                Factory
              </h1>
            </div>

            <p className="max-w-md text-lg lg:text-xl text-muted-foreground">
              Pleased to meet you, I'm Paul, senior Art Director, UI/UX Designer
              & illustrator.
            </p>

            <HeroStats />
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="absolute top-0 right-12 w-[80%] h-[80%] bg-[#21202C] dark:bg-[#F7F7F7] rounded-[40px]" />
              <Image
                src="/hero-image.png"
                alt="Isometric Factory Illustration"
                width={600}
                height={700}
                className="relative z-10 object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
