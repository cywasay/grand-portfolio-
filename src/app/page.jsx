import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturedWorks } from "@/components/sections/featured-works";
import { ServicesIntro } from "@/components/sections/services-intro";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <FeaturedWorks />
        <ServicesIntro />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
