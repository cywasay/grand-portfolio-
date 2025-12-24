"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/ui/primary-button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic log for now
    console.log("Form submitted:", formData);
  };

  return (
    <section className="pb-24 px-4 lg:px-8 max-w-7xl mx-auto bg-[#F3F2EF] dark:bg-background transition-colors duration-300">
      <div className="bg-white dark:bg-[#1A1A23] rounded-[40px] p-8 md:p-12 lg:p-16 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label
                htmlFor="name"
                className="text-sm font-bold uppercase tracking-wider text-[#1A1A23]/60 dark:text-white/60"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#F3F2EF] dark:bg-background border-2 border-transparent focus:border-[#1A1A23] dark:focus:border-white rounded-xl px-6 py-4 text-[#1A1A23] dark:text-white font-medium outline-none transition-all placeholder:text-[#1A1A23]/30 dark:placeholder:text-white/30"
              />
            </div>
            <div className="space-y-3">
              <label
                htmlFor="email"
                className="text-sm font-bold uppercase tracking-wider text-[#1A1A23]/60 dark:text-white/60"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#F3F2EF] dark:bg-background border-2 border-transparent focus:border-[#1A1A23] dark:focus:border-white rounded-xl px-6 py-4 text-[#1A1A23] dark:text-white font-medium outline-none transition-all placeholder:text-[#1A1A23]/30 dark:placeholder:text-white/30"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label
              htmlFor="subject"
              className="text-sm font-bold uppercase tracking-wider text-[#1A1A23]/60 dark:text-white/60"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Project Inquiry"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-[#F3F2EF] dark:bg-background border-2 border-transparent focus:border-[#1A1A23] dark:focus:border-white rounded-xl px-6 py-4 text-[#1A1A23] dark:text-white font-medium outline-none transition-all placeholder:text-[#1A1A23]/30 dark:placeholder:text-white/30"
            />
          </div>

          <div className="space-y-3">
            <label
              htmlFor="message"
              className="text-sm font-bold uppercase tracking-wider text-[#1A1A23]/60 dark:text-white/60"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#F3F2EF] dark:bg-background border-2 border-transparent focus:border-[#1A1A23] dark:focus:border-white rounded-xl px-6 py-4 text-[#1A1A23] dark:text-white font-medium outline-none transition-all resize-none placeholder:text-[#1A1A23]/30 dark:placeholder:text-white/30"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#1A1A23] dark:bg-white text-white dark:text-[#1A1A23] font-black uppercase tracking-wider rounded-[30px] text-xl transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
