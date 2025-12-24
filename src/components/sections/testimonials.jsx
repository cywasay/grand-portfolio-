"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Paul worked for dVine from 2012 to 2025. He provided support on all aspects of the brand identity, as well as interactions with industrial designers on hardware developments. I wholeheartedly recommend Paul for his talent, commitment, and ability to apprehend business issues on a global scale.",
      company: "dVine",
      author: "Yannis",
    },
    {
      text: "What I appreciate about Paul through these experiences is his thoroughness, his ability to work in a team, his professionalism and use of modern tools such as Figma, Jira and the Photoshop suite. All of this enable efficient collaboration between the product and development teams and fit perfectly into the logic of our agile sprint methodology.",
      company: "Koov",
      author: "Alex",
    },
    {
      text: "Working with Paul has been a game-changer for our brand. He intuitively understood our vision and translated it into a design language that resonates deeply with our audience. His strategic approach to UI/UX has significantly improved our user retention rates.",
      company: "TechFlow",
      author: "Sarah",
    },
    {
      text: "An exceptional designer who combines artistic flair with technical precision. Paul's ability to navigate complex requirements and deliver simple, elegant solutions is unmatched. He is a true partner in the creative process.",
      company: "Innovate Labs",
      author: "David",
    },
  ];

  return (
    <section className="py-32 bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#1A1A23] dark:text-white tracking-tight leading-none mb-2">
            Very Satisfied
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#1A1A23] dark:text-white tracking-tight leading-none">
            Customers
          </h2>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-10">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-10 md:basis-1/2 lg:basis-1/2"
              >
                <div className="bg-white dark:bg-[#1A1A23] p-12 rounded-[40px] h-full min-h-[400px] flex flex-col justify-between">
                  <div>
                    <Quote className="w-12 h-12 text-[#1A1A23] dark:text-white mb-8 fill-[#1A1A23] dark:fill-white" />
                    <p className="text-lg md:text-xl font-medium text-[#1A1A23]/80 dark:text-white/80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden xl:flex">
            <CarouselPrevious className="w-16 h-16 bg-white dark:bg-[#21202C] border-none shadow-lg text-foreground hover:bg-white hover:text-foreground" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:flex">
            <CarouselNext className="w-16 h-16 bg-white dark:bg-[#21202C] border-none shadow-lg text-foreground hover:bg-white hover:text-foreground" />
          </div>

          {/* Mobile Navigation shown below */}
          <div className="flex xl:hidden justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 w-14 h-14 bg-white dark:bg-[#21202C] border-none shadow-md" />
            <CarouselNext className="static translate-y-0 w-14 h-14 bg-white dark:bg-[#21202C] border-none shadow-md" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
