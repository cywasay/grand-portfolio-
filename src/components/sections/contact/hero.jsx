import Image from "next/image";

export function ContactHero() {
  return (
    <section className="min-h-[80vh] flex items-center bg-[#F3F2EF] dark:bg-background transition-colors duration-300 pt-32 lg:pt-0">
      <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 mt-32 lg:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#1A1A23] dark:text-foreground">
                Full
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black uppercase text-[#1A1A23] dark:text-foreground">
                Contact
              </h1>
            </div>

            <div className="space-y-6 text-lg lg:text-xl text-[#1A1A23]/80 dark:text-muted-foreground font-medium max-w-md">
              <p>
                This is where we get down to business. Go ahead and describe
                your creative needs in broad terms, and I'll be sure to read it
                carefully.
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-[#1A1A23] dark:text-foreground font-bold">
                  You can also contact me directly:
                </p>
                <div className="flex gap-6">
                  <a
                    href="mailto:hello@example.com"
                    className="font-extrabold text-[#1A1A23] dark:text-foreground underline decoration-2 underline-offset-4 hover:text-[#F95D42] transition-colors"
                  >
                    E-mail
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="font-extrabold text-[#1A1A23] dark:text-foreground underline decoration-2 underline-offset-4 hover:text-[#F95D42] transition-colors"
                  >
                    Phone
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="absolute top-0 right-12 w-[80%] h-[80%] bg-[#1A1A23] dark:bg-[#F7F7F7] rounded-[40px]" />
              <Image
                src="/hero-image.png"
                alt="Isometric Contact Illustration"
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
