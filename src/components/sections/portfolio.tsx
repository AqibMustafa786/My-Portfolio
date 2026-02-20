"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { motion, AnimatePresence } from "framer-motion";

export function PortfolioSection() {
  const webProjects = projects.filter(p => p.category === "Web Development");
  const mobileProjects = projects.filter(p => p.category === "Mobile App");

  return (
    <section id="projects" className="relative py-32 overflow-hidden bg-black selection:bg-purple-500/30">
      {/* Dynamic Background Elements - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-purple-500/10 rounded-full blur-[80px] lg:blur-[120px] mix-blend-screen opacity-20 lg:opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-500/10 rounded-full blur-[60px] lg:blur-[100px] mix-blend-screen opacity-20 lg:opacity-30 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 mb-4">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Masterpieces</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Strategic digital solutions delivered for international markets (USA, UK, Europe).
          </p>
        </motion.div>

        {/* Mobile Applications Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-[1px] bg-gradient-to-r from-purple-500 to-transparent w-24"></div>
            <h3 className="text-3xl font-bold text-white">Mobile Applications</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {mobileProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Web Applications Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-[1px] bg-gradient-to-r from-blue-500 to-transparent w-24"></div>
            <h3 className="text-3xl font-bold text-white">Web Development</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {webProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
