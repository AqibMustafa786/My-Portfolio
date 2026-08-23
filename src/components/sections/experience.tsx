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
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            A timeline of my professional journey and growth in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12">
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
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 items-center justify-center w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-lg shadow-primary/30">
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date/Location (Desktop Opposite Side) */}
                <div className={`flex-1 hidden md:flex flex-col justify-center ${index % 2 === 0 ? 'items-end text-right' : 'items-start text-left'}`}>
                  <div className="text-3xl font-bold text-foreground/10 tracking-tight">
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-medium">{exp.location}</span>
                  </div>
                </div>

                {/* Mobile Date/Location Display */}
                <div className="md:hidden flex items-center justify-between text-xs font-medium text-muted-foreground px-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
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
