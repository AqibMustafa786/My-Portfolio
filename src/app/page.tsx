import { personalizedGreeting } from '@/ai/flows/personalized-greeting';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';
import { PortfolioSection } from '@/components/sections/portfolio';
import { StatsSection } from '@/components/sections/stats';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';

export default async function Home() {
  const { greeting } = await personalizedGreeting({
    // Using a more generic history to not imply specific page visits for the new design
    browsingHistory: 'A returning visitor interested in modern web development.', 
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden">
      {/* Floating Animated Blobs */}
      <motion.div 
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl filter"
      />
      <motion.div 
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/15 rounded-full blur-3xl filter"
      />

      <Header />
      <main className="flex-1">
        <HeroSection greeting={greeting} />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
