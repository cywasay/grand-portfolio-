import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WorkHero } from "@/components/sections/work/hero";
import { WorkGrid } from "@/components/sections/work/grid";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#F3F2EF] dark:bg-background text-foreground relative transition-colors duration-300">
      <Header />
      <main>
        <WorkHero />
        <WorkGrid />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
