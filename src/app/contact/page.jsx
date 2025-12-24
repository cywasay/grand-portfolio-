import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactHero } from "@/components/sections/contact/hero";
import { ContactForm } from "@/components/sections/contact/form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F3F2EF] dark:bg-background text-foreground relative transition-colors duration-300">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
