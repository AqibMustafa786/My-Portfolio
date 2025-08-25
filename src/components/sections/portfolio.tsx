"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Nutrimate AI Chatbot",
    description: "An AI-powered nutritionist chatbot built with Flutter and Google Gemini API for personalized diet plans.",
    image: "https://placehold.co/600x400.png",
    hint: "AI chatbot",
    tags: ["Flutter", "AI", "Mobile App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Canteen Management System",
    description: "A comprehensive web application for managing canteen operations, built with Laravel and Breeze Authentication.",
    image: "https://placehold.co/600x400.png",
    hint: "web application",
    tags: ["Laravel", "Web App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Age & Gender Recognition",
    description: "A computer vision project using Python and OpenCV to detect age and gender from images.",
    image: "https://placehold.co/600x400.png",
    hint: "AI recognition",
    tags: ["Python", "AI", "OpenCV"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Learnify Kids App",
    description: "An educational mobile application for children, developed using Flutter to provide an interactive learning experience.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile learning",
    tags: ["Flutter", "Mobile App"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Freelance WordPress Site",
    description: "A custom WordPress theme and plugin development for a freelance client, focusing on performance and SEO.",
    image: "https://placehold.co/600x400.png",
    hint: "website design",
    tags: ["WordPress", "Web App"],
    liveUrl: "#",
    githubUrl: "#",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
};

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">My Portfolio</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      data-ai-hint={project.hint}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 bg-secondary/30">
                  <div className="flex justify-between w-full">
                    <Button variant="ghost" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                    <Button variant="ghost" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
