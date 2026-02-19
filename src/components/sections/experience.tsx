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
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Professional <span className="text-purple-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and growth in the tech industry.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 items-center justify-center w-4 h-4 rounded-full bg-black border-2 border-purple-500 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300">
                    <div className="relative h-full bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 group-hover:border-white/20 transition-colors">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-purple-400">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                          <span className="hidden md:block text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                            {exp.duration}
                          </span>
                        </div>

                        <p className="text-gray-400 leading-relaxed text-sm">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.skills.map(skill => (
                            <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all">
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
                  <div className="text-2xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Mobile Date/Location Display */}
                <div className="md:hidden flex items-center justify-between text-sm text-gray-500 px-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
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
