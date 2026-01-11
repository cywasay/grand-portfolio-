import { PrimaryButton } from "@/components/ui/primary-button";
import { ServiceCard } from "@/components/ui/service-card";
import {
  PenTool,
  Monitor,
  Code,
  Video,
  Image as ImageIcon,
  Box,
} from "lucide-react";

export function ServicesIntro() {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      items: [
        "React & Next.js Expert",
        "Responsive Web Apps",
        "UI Animation (Motion)",
        "Accessibility (a11y)",
      ],
    },
    {
      icon: Box,
      title: "Backend Solutions",
      items: [
        "Node.js & Express",
        "Database Architecture",
        "REST & GraphQL APIs",
        "Microservices",
      ],
    },
    {
      icon: Monitor,
      title: "Full Stack UX",
      items: [
        "Dynamic Interfaces",
        "User Flow Optimization",
        "State Management",
        "Figma-to-Code Delivery",
      ],
    },
    {
      icon: PenTool,
      title: "Clean Code Audit",
      items: [
        "Performance Tuning",
        "Refactoring Legacy Code",
        "Unit & E2E Testing",
        "CI/CD Implementation",
      ],
    },
    {
      icon: ImageIcon,
      title: "Cloud Deployment",
      items: [
        "AWS/Vercel setup",
        "Docker Containerization",
        "Serverless Functions",
        "Security Best Practices",
      ],
    },
    {
      icon: Video,
      title: "API Integration",
      items: [
        "Payment Gateways",
        "Third-party Auth",
        "Real-time Sockets",
        "CMS Headless Setup",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 container">
        <div className="flex flex-col gap-8 max-w-4xl">
          {/* Heading Block */}
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl font-black uppercase text-[#1A1A23] dark:text-white tracking-tight">
              You need
            </h3>

            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#1A1A23] dark:text-white tracking-tight leading-none">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-[3px] md:border-[5px] border-[#1A1A23] dark:border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-spin-slow"
                >
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                  <path d="M3 21v-5h5" />
                </svg>
              </span>
              <span>Robust Architecture</span>
            </div>
          </div>

          {/* Description Paragraph */}
          <p className="text-lg md:text-xl font-medium text-[#1A1A23]/70 dark:text-white/70 max-w-2xl leading-relaxed mt-4">
            With over 8 years of experience in the full software development
            lifecycle, I build scalable, efficient, and user-centric web
            applications that solve real-world problems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-20 flex justify-center">
          <PrimaryButton href="/services">See all my services</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
