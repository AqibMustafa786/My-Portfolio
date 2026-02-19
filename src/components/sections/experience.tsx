"use client";

<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Data Entry & App Management",
    company: "Pioneer Home Solutions (USA)",
    duration: "1 Year (Remote)",
    description: "Responsible for data entry and managing and updating the company's internal application."
  },
  {
    role: "Internship",
    company: "Suncrown Agri Business",
    duration: "6 weeks",
    description: "Gained hands-on experience in the agri-business sector, contributing to various projects and learning industry-standard practices."
  }
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
];

export function ExperienceSection() {
  return (
<<<<<<< HEAD
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
=======
    <section id="experience">
      <div className="container">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Experience
        </motion.h2>
        
        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-purple-400/30"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative pl-12 md:pl-0 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:flex items-center md:flex-row-reverse">
                {/* Content block */}
                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                   <motion.div
                    initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-xl"
                  >
                    <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-300">{exp.role}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.duration}</p>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
                   </motion.div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-1 w-4 h-4 bg-purple-500 dark:bg-purple-400 rounded-full -translate-x-1/2 -translate-y-1/2 ring-8 ring-purple-500/20 dark:ring-purple-400/20"></div>
                
                {/* Spacer for alignment on desktop */}
                <div className={`hidden md:block w-1/2 ${index % 2 !== 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
              </div>
            </motion.div>
          ))}
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
        </div>
      </div>
    </section>
  );
}
