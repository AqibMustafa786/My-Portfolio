"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCarousel } from "@/components/project-carousel";

export function WebProjectsSection() {
  const webProjects = projects.filter(p => p.category === "Web Development");

  return (
    <section id="projects" className="relative py-28 overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1.5 px-5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 border border-primary/20">
            Live Web Applications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vercel <span className="text-primary">Deployments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Explore live production-grade SaaS and e-commerce platforms.
          </p>
        </motion.div>

        <ProjectCarousel projects={webProjects} />
      </div>
    </section>
  );
}
