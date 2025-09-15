"use client";

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
];

export function ExperienceSection() {
  return (
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
        </div>
      </div>
    </section>
  );
}
