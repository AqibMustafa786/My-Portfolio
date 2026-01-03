"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Live CRM Dashboard",
    description: "Built with Firebase Studio and using Google Sheets for the database.",
    image: "/images/furniture.png",
    hint: "furniture dashboard",
    tags: ["Firebase Studio", "Google Sheets", "Web App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Resume Rocket",
    description: "A modern PDF tools website built on Firebase Studio with MongoDB.",
    image: "/images/resume.png",
    hint: "resume builder",
    tags: ["Firebase Studio", "MongoDB", "Web App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "EduGenius Kids App",
    description: "An engaging educational platform designed to make learning a fun adventure for children, brought to life with interactive features in Firebase Studio.",
    image: "/images/edu.png",
    hint: "kids learning",
    tags: ["Firebase Studio", "MongoDB", "Web App"],
    liveUrl: "#",
    githubUrl: "#",
  },
   {
    title: "Task Management App",
    description: "A collaborative task management application built with AppSheet.",
    image: "/images/Task.png?v=2",
    hint: "task management",
    tags: ["AppSheet", "Productivity", "Business App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Client Portal / CRM",
    description: "A comprehensive CRM and client portal built on AppSheet with Google Sheets.",
    image: "/images/client-portal.png",
    hint: "CRM AppSheet",
    tags: ["AppSheet", "Google Sheets", "Business App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Showroom Management System",
    description: "An efficient showroom management system created using AppSheet.",
    image: "/images/Showroom.png",
    hint: "showroom system",
    tags: ["AppSheet", "Google Sheets", "Utility"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Portfolio
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -8, rotate: -1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-xl overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  data-ai-hint={project.hint}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-300">{project.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-purple-500/20 text-purple-600 dark:text-purple-300 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
              </div>
              <div className="p-4 bg-black/5 dark:bg-black/30 mt-auto flex justify-end gap-2">
                <Link href={project.githubUrl} target="_blank" className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <Github className="h-5 w-5" />
                </Link>
                <Link href={project.liveUrl} target="_blank" className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
