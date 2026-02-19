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
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />

      <main className="flex-1">
        <HeroModern greeting={greeting} />

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
