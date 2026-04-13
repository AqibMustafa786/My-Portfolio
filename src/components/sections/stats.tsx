"use client";

import { AnimatedCounter } from "@/components/animated-counter";
import { Award, GraduationCap, Globe, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 50, icon: Award, suffix: "+" },
  { label: "Years of Experience", value: 2, icon: Globe },
  { label: "CS Graduate", value: 1, icon: GraduationCap },
  { label: "Core Skills", value: 3, icon: Lightbulb },
];

export function StatsSection() {
  return (
    <section id="stats" className="bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
        >
          <span className="text-rose-600 font-black tracking-[0.5em] uppercase text-[10px] mb-8 block italic">Measurable Impact</span>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-black font-headline leading-none">
            Strategic <span className="text-rose-600 not-italic">Metrics</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:border-rose-600 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-rose-500/5 text-left h-full group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black mb-8 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 border border-zinc-100 group-hover:border-rose-600 shadow-sm">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-5xl md:text-6xl font-black text-black font-headline italic tracking-tighter mb-2">
                <AnimatedCounter endValue={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-zinc-400 font-black uppercase tracking-widest text-[9px] italic">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
