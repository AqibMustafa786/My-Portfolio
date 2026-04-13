"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { motion, AnimatePresence } from "framer-motion";
import { MobileAppShowcase } from "./mobile-app-showcase";

export function PortfolioSection() {
  const webProjects = projects.filter(p => p.category === "Web Development");
  const mobileProjects = projects.filter(p => p.category === "Mobile App");

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-white selection:bg-rose-500/10 border-t border-zinc-50">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-black text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8 shadow-2xl shadow-rose-500/20 italic">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-black mb-8 leading-[0.9] font-headline">
            Featured <span className="text-rose-600 not-italic">Masterpieces</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg italic font-medium">
            A curated selection of high-performance applications designed to solve real-world problems.
          </p>
        </motion.div>

        {/* Mobile Applications Section */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-[2px] bg-rose-600 w-16"></div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-black font-headline leading-none">Mobile Applications</h3>
            <div className="h-[1px] flex-grow bg-zinc-100"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {mobileProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Web Applications Section */}
        <div className="pb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mb-16"
          >
            <div className="h-[2px] bg-black w-16"></div>
            <h3 className="text-3xl font-black italic uppercase tracking-tighter text-black font-headline leading-none">Web Development</h3>
            <div className="h-[1px] flex-grow bg-zinc-100"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
