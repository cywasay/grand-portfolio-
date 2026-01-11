import { PenTool, Monitor, Code, Video, Megaphone, Box } from "lucide-react";

export function ServicesList() {
  const services = [
    {
      icon: Code,
      title: "FRONTEND ENGINEERING",
      description:
        "I build high-performance, accessible, and responsive user interfaces using modern frameworks like React and Next.js. My focus is on creating smooth user experiences with complex state management, robust component architectures, and optimized rendering. Whether it's a dynamic SaaS dashboard or a high-converting landing page, I ensure pixel-perfect implementation and type-safe code.",
      featured: {
        name: "Fintech Dashboard",
        color: "bg-[#1A1A23]",
      },
    },
    {
      icon: Monitor,
      title: "FULL STACK SOLUTIONS",
      description:
        "End-to-end development of complex web applications. I bridge the gap between frontend and backend, ensuring seamless data flow and consistent user experience. I specialize in building scalable architectures that can handle high traffic while maintaining rapid development cycles and ease of deployment.",
      featured: {
        name: "E-Commerce Hub",
        color: "bg-[#8D7F71]",
      },
    },
    {
      icon: Box,
      title: "BACKEND ARCHITECTURE",
      description:
        "Designing robust server-side logic and database schemas. I specialize in Node.js and Go, building RESTful and GraphQL APIs that are secure, scalable, and efficient. I focus on database optimization, caching strategies, and microservices architecture to ensure your application can grow without technical debt.",
      featured: {
        name: "HealthConnect AI",
        color: "bg-[#2A3B90]",
      },
    },
    {
      icon: Monitor,
      title: "PERFORMANCE OPTIMIZATION",
      description:
        "I audit and optimize existing codebases to improve Core Web Vitals, page speed, and overall efficiency. This includes everything from frontend bundle reduction and image optimization to backend query performance and infrastructure scaling via Docker and Kubernetes.",
      featured: {
        name: "Next Gen",
        color: "bg-[#E0E0E0]",
        textColor: "text-[#1A1A23]",
      },
    },
    {
      icon: PenTool,
      title: "TECHNICAL CONSULTING",
      description:
        "Strategic advice on your technical roadmap. I help you choose the right tech stack, define your architecture, and implement best practices for testing, CI/CD, and security. I provide deep dives into complex engineering problems and deliver actionable solutions that align with your business goals.",
      featured: {
        name: "Skaelia",
        color: "bg-[#21202C]",
      },
    },
  ];

  return (
    <section className="pb-24 lg:pb-32 px-4 lg:px-8 max-w-7xl mx-auto bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row bg-white dark:bg-[#FFFFFF] rounded-[40px] p-6 md:p-8 lg:p-12 gap-8 lg:gap-16 shadow-sm overflow-hidden min-h-[500px]"
          >
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-center space-y-8">
              <div className="flex flex-col gap-6">
                {/* Icon */}
                <div className="w-16 h-16 relative">
                  <service.icon
                    strokeWidth={1.5}
                    className="w-full h-full text-[#1A1A23]"
                  />
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#1A1A23] tracking-tight leading-none">
                  {service.title}
                </h3>
              </div>

              <p className="text-lg text-[#1A1A23]/80 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Right Card Preview */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-full flex items-center justify-center">
              <div
                className={`w-full aspect-square lg:aspect-auto lg:h-full rounded-[30px] relative overflow-hidden flex flex-col justify-center items-center ${service.featured.color}`}
              >
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-[#1A1A23] text-white text-xs font-black uppercase tracking-widest py-3 px-4 rounded-full rotate-12 flex items-center justify-center border-2 border-dashed border-white/20 shadow-lg">
                    Featured
                  </div>
                </div>

                {/* Placeholder Logo/Content Center */}
                <div className="relative z-10">
                  <h4
                    className={`text-5xl font-bold ${
                      service.featured.textColor || "text-white"
                    }`}
                  >
                    {service.featured.name}
                  </h4>
                  <div className="absolute -inset-10 bg-white/5 blur-2xl rounded-full -z-10" />
                </div>

                {/* Decorative Background Circles */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/20 rounded-full" />
                </div>
              </div>

              {/* Link below card */}
              <div className="absolute -bottom-2 left-0 w-full flex justify-start lg:hidden">
                {/* Mobile link styling can go here if needed, but per design it seems integrated or below */}
              </div>
            </div>
            <div className="lg:absolute lg:bottom-12 lg:right-12 xl:right-16 hidden lg:block">
              <a
                href="#"
                className="text-lg font-bold text-[#1A1A23] flex items-center gap-2 hover:gap-4 transition-all"
              >
                {service.featured.name} <span className="text-2xl">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
