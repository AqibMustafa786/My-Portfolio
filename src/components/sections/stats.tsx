"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { Award, GraduationCap, Globe, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 5, icon: Award, suffix: "+" },
  { label: "Work Experiences", value: 2, icon: Globe },
  { label: "CS Graduate", value: 1, icon: GraduationCap },
  { label: "Core Skills", value: 3, icon: Lightbulb },
];

export function StatsSection() {
  return (
    <section id="stats" className="bg-white/40 dark:bg-black/40 backdrop-blur-lg">
      <div className="container">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-bold text-center mb-12"
        >
          Achievements & Stats
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-lg backdrop-blur-xl text-center h-full"
            >
              <stat.icon className="h-10 w-10 mx-auto mb-4 text-purple-500 dark:text-purple-400" />
              <div className="text-4xl font-bold text-gray-800 dark:text-white">
                <AnimatedCounter endValue={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
