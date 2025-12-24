import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/components/sections/services/hero";
import { ServicesList } from "@/components/sections/services/services-list";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F3F2EF] dark:bg-background text-foreground relative transition-colors duration-300">
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
