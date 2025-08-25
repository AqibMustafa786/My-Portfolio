"use client";

import { Briefcase } from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';

const experiences = [
  {
    role: "Web Developer",
    company: "Pioneer Home Solutions (USA)",
    duration: "3 months",
    description: "Developed and maintained web applications, contributing to both front-end and back-end features for an international client."
  },
  {
    role: "Internship",
    company: "Suncrown Agri Business",
    duration: "6 weeks (Jan - Feb 2024)",
    description: "Gained practical experience in a professional environment, assisting the development team with various tasks and learning industry best practices."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-secondary/50">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12 font-headline">My Experience</h2>
        </ScrollReveal>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} className="mb-12">
              <div className="relative flex items-center">
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <p className="text-sm text-accent-foreground/80 font-semibold">{exp.duration}</p>
                    <h3 className="text-xl font-bold font-headline mb-1">{exp.role}</h3>
                    <p className="text-md text-muted-foreground mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center ring-8 ring-background">
                  <Briefcase className="w-4 h-4 text-accent-foreground" />
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
