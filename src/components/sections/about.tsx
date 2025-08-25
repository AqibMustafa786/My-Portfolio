"use client";

import { BrainCircuit, CodeXml, Database, Keyboard, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "Web Development", icon: CodeXml },
  { name: "Mobile Development", icon: Smartphone },
  { name: "AI & ML", icon: BrainCircuit },
  { name: "Tools & Databases", icon: Database },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-black/40 backdrop-blur-lg rounded-t-3xl">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 text-center leading-relaxed mb-12">
            I’m a passionate <span className="text-purple-400 font-semibold">Software Engineer</span> 
            and Computer Science graduate specializing in 
            <span className="text-pink-400"> Web Apps, Mobile Apps, WordPress Development, and AI Projects</span>.  
            With international work experience, internships, and freelance projects, 
            I build digital solutions that merge creativity with technology 🚀
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
             <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center text-center p-4"
            >
              <skill.icon className="w-12 h-12 mb-3 text-purple-300" />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
