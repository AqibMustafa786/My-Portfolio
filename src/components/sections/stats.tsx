"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { Award, GraduationCap, Globe, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 5, icon: Award, suffix: "+" },
  { label: "International Work Experience", value: 1, icon: Globe },
  { label: "Skilled in Web, Mobile & AI", value: 3, icon: Lightbulb },
  { label: "Computer Science Graduate", value: 1, icon: GraduationCap },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  },
};


export function StatsSection() {
  return (
    <section id="stats" className="bg-secondary/50">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">Achievements & Stats</h2>
        </motion.div>

        <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-card p-6 rounded-lg shadow-md text-center h-full">
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold font-headline text-accent-foreground/90">
                  <AnimatedCounter endValue={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
