import { PenTool, Monitor, Code, Video, Megaphone } from "lucide-react";

export function ServicesList() {
  const services = [
    {
      icon: PenTool,
      title: "ART DIRECTION",
      description:
        "Whether it's a new branding or a logo redesign, we'll work with you to create a striking identity for your target market that will stand out from your competitors. By this I mean: a truly professional and coherent logo with a color universe, a singular typography (except Lobster) and the right iconography to shine through. If your brand is already established, I can develop it on new media while maintaining overall consistency.",
      featured: {
        name: "Skaelia",
        color: "bg-[#1A1A23]", // Dark card color
      },
    },
    {
      icon: Monitor,
      title: "UI/UX DESIGN",
      description:
        "I design intuitive and engaging user interfaces for web and mobile applications. My process involves deep user research, wireframing, and high-fidelity prototyping to ensure a seamless user experience. I focus on creating designs that are not only visually appealing but also functional and accessible, enhancing user satisfaction and retention.",
      featured: {
        name: "Koov",
        color: "bg-[#8D7F71]", // Brownish card color
      },
    },
    {
      icon: Code,
      title: "WEB DEVELOPMENT",
      description:
        "I bring designs to life with clean, efficient, and semantic code. Specializing in modern frontend frameworks like React and Next.js, I build responsive, fast-loading, and SEO-friendly websites. From landing pages to complex web applications, I ensure your digital presence is robust, scalable, and easy to maintain.",
      featured: {
        name: "Peek'in",
        color: "bg-[#2A3B90]", // Blue card color
      },
    },
    {
      icon: Video,
      title: "MOTION DESIGN",
      description:
        "Add life to your digital products with captivating motion design. I create smooth animations and micro-interactions that guide users and provide delightful feedback. Whether it's a logo animation, an explainer video, or UI transitions, I use motion to tell your brand's story and make your interface feel more dynamic and polished.",
      featured: {
        name: "Next Gen",
        color: "bg-[#E0E0E0]", // Light card color
        textColor: "text-[#1A1A23]",
      },
    },
    {
      icon: Megaphone,
      title: "STRATEGY",
      description:
        "Beyond visuals, I help define your digital strategy. We'll analyze your market, identify your audience, and craft a roadmap for success. From content strategy to user acquisition channels, I provide insights that align design and development with your business goals, ensuring every pixel serves a purpose.",
      featured: {
        name: "Urban Dynamics",
        color: "bg-[#21202C]", // Dark purple card color
      },
    },
  ];

  return (
    <section className="pb-24 lg:pb-32 px-4 lg:px-8 max-w-7xl mx-auto bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row bg-white dark:bg-[#FFFFFF] rounded-[40px] p-8 lg:p-12 gap-12 lg:gap-16 shadow-sm overflow-hidden min-h-[500px]"
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

                <h3 className="text-4xl md:text-5xl font-black uppercase text-[#1A1A23] tracking-tight leading-none">
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
