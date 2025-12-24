import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="py-24 px-4 bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto container">
        <div className="w-full bg-[#1A1A23] dark:bg-[#DADADA] rounded-[60px] py-16 px-6 md:px-12 flex flex-col items-center justify-center text-center space-y-8 transition-colors duration-300">
          {/* Heading */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-black uppercase text-white dark:text-[#1A1A23] tracking-widest transition-colors duration-300">
              Do you have an
            </h3>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase text-white dark:text-[#1A1A23] tracking-tight leading-none transition-colors duration-300">
              Awesome Project?
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-white/80 dark:text-[#1A1A23]/80 text-lg md:text-xl font-medium max-w-2xl transition-colors duration-300">
            It's the perfect time to get started!
          </p>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center px-12 py-5 bg-[#F95D42] text-white font-black uppercase tracking-wider rounded-[30px] text-xl transition-all duration-300 hover:scale-105 hover:bg-[#e45231] hover:shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
