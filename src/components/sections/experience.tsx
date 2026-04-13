"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Flutter Mobile App Developer",
    company: "Freelance / Fiverr",
    duration: "2024 - Present",
    location: "Remote",
    description: "Developed and deployed multiple high-performance mobile applications using Flutter. Specialized in custom UI designs, Firebase integration, and state management solutions.",
    skills: ["Flutter", "Dart", "Firebase", "State Management"]
  },
  {
    role: "AppSheet Developer",
    company: "Freelance",
    duration: "2023 - Present",
    location: "Remote",
    description: "Designed and implemented complex business process automation tools using Google AppSheet. Built inventory management systems, CRM dashboards, and field data collection apps.",
    skills: ["AppSheet", "Google Workspace", "Automation"]
  },
  {
    role: "Full Stack Web Developer",
    company: "Self-Initiated / Projects",
    duration: "2023 - Present",
    location: "Remote",
    description: "Built modern web applications using Next.js and React. Created SaaS platforms like InvoiceCraft and e-commerce solutions with secure authentication and payment integration.",
    skills: ["Next.js", "React", "Node.js", "Tailwind CSS"]
  },
  {
    role: "Data Entry & App Management",
    company: "Pioneer Home Solutions",
    duration: "2022 - 2023",
    location: "Remote (USA Based)",
    description: "Managed internal company data and application systems. Ensured data accuracy and optimized workflows for the operations team.",
    skills: ["Data Entry", "System Administration", "Communication"]
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-black font-headline tracking-tighter italic">
            Professional <span className="text-rose-600 not-italic">Experience</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto italic font-medium">
            A timeline of my professional journey and growth in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-10 items-center justify-center w-5 h-5 rounded-full bg-white border-4 border-rose-600 z-10 shadow-xl">
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="group relative p-1 rounded-[2rem] transition-all duration-500">
                    <div className="relative h-full bg-zinc-50 rounded-[1.5rem] p-10 border border-zinc-100 group-hover:border-rose-600 group-hover:bg-white shadow-sm hover:shadow-2xl transition-all">
                      <div className="flex flex-col gap-6">
                        <div>
                          <h3 className="text-2xl font-black text-black mb-2 font-headline tracking-tight group-hover:text-rose-600 transition-colors italic leading-tight">{exp.role}</h3>
                          <div className="flex items-center gap-3 text-rose-500 text-[10px] font-black uppercase tracking-widest">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <p className="text-zinc-500 leading-relaxed text-sm italic font-medium">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.skills.map(skill => (
                            <span key={skill} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-white text-zinc-400 border border-zinc-100 group-hover:border-rose-200 group-hover:text-rose-600 transition-all shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date/Location (Desktop Opposite Side) */}
                <div className={`flex-1 hidden md:flex flex-col justify-center ${index % 2 === 0 ? 'items-end text-right' : 'items-start text-left'}`}>
                  <div className="text-5xl font-black text-black/[0.04] group-hover:text-black/[0.08] transition-colors tracking-tighter italic font-headline uppercase">
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 mt-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest italic">{exp.location}</span>
                  </div>
                </div>

                {/* Mobile Date/Location Display */}
                <div className="md:hidden flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400 px-4 italic">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-rose-600" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
