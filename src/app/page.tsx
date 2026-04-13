"use client";

import { Navbar } from '@/components/navbar';
import { HeroModern } from '@/components/sections/hero-modern';
import { SkillsModern } from '@/components/sections/skills-modern';
import { Footer } from '@/components/footer';
import { ProjectCard } from '@/components/project-card';
import { PortfolioSection } from '@/components/sections/portfolio';
import { ProductizedServices } from '@/components/sections/productized-services';
import { ContactSection } from '@/components/sections/contact';
import { ExperienceSection } from '@/components/sections/experience';
import { AboutSection } from '@/components/sections/about';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { personalizedGreeting } from '@/ai/flows/personalized-greeting';

export default function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    personalizedGreeting({
      browsingHistory: 'A returning visitor interested in modern web development.',
    }).then(response => setGreeting(response.greeting));
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-black selection:bg-rose-500/10 font-body">
      <Navbar />

      <main className="flex-1">
        <HeroModern greeting={greeting} />
        
        <AboutSection />

        {/* Hidden SEO Keywords Section for Google Indexing */}
        <div className="sr-only">
          <h2>My Expertise</h2>
          <ul>
            <li>Web Application Development</li>
            <li>AppSheet Mobile & Web Apps</li>
            <li>Firebase Backend Systems</li>
            <li>SaaS Product Development</li>
          </ul>
          <h2>Featured Projects</h2>
          <p>InvoiceCraft – SaaS Invoice System</p>
          <p>FurnishFlow – E-Commerce Platform</p>
          <p>FitTrack Pro - Mobile & Admin Ecosystem</p>
        </div>

        <SkillsModern />

        <ExperienceSection />

        <PortfolioSection />

        <ProductizedServices />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
