"use client";

import { projects } from "@/data/projects";
import { ProjectCarousel } from "@/components/project-carousel";
import { motion } from "framer-motion";

export function PortfolioSection() {
  const mobileProjects = projects.filter(p => p.category === "Mobile App");

  return (
    <section id="mobile-projects" className="relative py-28 overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1.5 px-5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 border border-primary/20">
            Mobile & AppSheet Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mobile <span className="text-primary">Ecosystems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            A curated selection of high-performance mobile apps and no-code automations.
          </p>
        </motion.div>

        <div className="pb-10">
          <ProjectCarousel projects={mobileProjects} />
        </div>
      </div>
    </section>
  );
}
