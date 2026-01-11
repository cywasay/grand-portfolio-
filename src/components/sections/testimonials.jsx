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
      text: "Alex is a technical powerhouse. He completely refactored our legacy backend, improving response times by 40%. His ability to bridge the gap between complex engineering and user-friendly features is rare.",
      company: "DataVizion",
      author: "Yannis, CTO",
    },
    {
      text: "Working with Alex was a breath of fresh air. He implemented a complex real-time dashboard using Next.js and WebSockets that our team uses daily. The code is clean, well-documented, and incredibly easy to maintain.",
      company: "StreamLine",
      author: "Alex, Founder",
    },
    {
      text: "The architectural depth Alex brought to our project was impressive. He didn't just write code; he helped us design a system that could scale with our growth. His expertise in AWS and Docker saved us months of DevOps headaches.",
      company: "TechScale AI",
      author: "Sarah, VP Eng",
    },
    {
      text: "Alex delivered our MVP in record time without compromising on quality. His focus on performance and accessibility (a11y) ensured we reached a wider audience right from launch. Highly recommended.",
      company: "Innovate Labs",
      author: "David, Product",
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
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-[#1A1A23] dark:text-white tracking-tight leading-none">
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
