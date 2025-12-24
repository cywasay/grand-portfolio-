import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactCTA } from "@/components/sections/contact-cta";
import { AboutHero } from "@/components/sections/about/hero";
import { Toolbox } from "@/components/sections/about/toolbox";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F3F2EF] dark:bg-background text-foreground relative transition-colors duration-300">
      <Header />
      <main>
        <AboutHero />
        <Toolbox />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
