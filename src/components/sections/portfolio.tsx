"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Nutrimate AI Chatbot",
    description: "Flutter + Google Gemini for health recommendations",
    image: "https://placehold.co/600x400.png",
    hint: "AI chatbot",
    tags: ["Flutter", "AI", "Mobile"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Canteen Management System",
    description: "Laravel Breeze authentication system",
    image: "https://placehold.co/600x400.png",
    hint: "web application",
    tags: ["Laravel", "Web App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Age & Gender Recognition",
    description: "AI with Python & OpenCV",
    image: "https://placehold.co/600x400.png",
    hint: "AI recognition",
    tags: ["Python", "AI", "CV"],
    liveUrl: "#",
    githubUrl: "#",
  },
   {
    title: "Learnify Kids App",
    description: "Flutter learning app with interactive quizzes",
    image: "https://placehold.co/600x400.png",
    hint: "mobile learning",
    tags: ["Flutter", "Mobile App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SwiftDocs",
    description: "PDF tools website with modern UI",
    image: "https://placehold.co/600x400.png",
    hint: "website tools",
    tags: ["Web App", "Utility"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Freelance WordPress Site",
    description: "A custom WordPress theme and plugin development",
    image: "https://placehold.co/600x400.png",
    hint: "website design",
    tags: ["WordPress", "Web App"],
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
              className="flex flex-col rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl overflow-hidden"
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
                  <h3 className="text-xl font-bold text-purple-300">{project.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
              </div>
              <div className="p-4 bg-black/30 mt-auto flex justify-end gap-2">
                <Link href={project.githubUrl} target="_blank" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Github className="h-5 w-5" />
                </Link>
                <Link href={project.liveUrl} target="_blank" className="p-2 rounded-full hover:bg-white/10 transition-colors">
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
