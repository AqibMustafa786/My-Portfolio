import { personalizedGreeting } from '@/ai/flows/personalized-greeting';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';
import { PortfolioSection } from '@/components/sections/portfolio';
import { StatsSection } from '@/components/sections/stats';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default async function Home() {
  const { greeting } = await personalizedGreeting({
    browsingHistory: 'Visited "AI Projects" and "Web Development" pages.', // Simulated history for a better greeting
  });

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
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
