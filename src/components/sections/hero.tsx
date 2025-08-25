"use client";
import { Button } from "@/components/ui/button";
import { Download, MoveRight } from "lucide-react";
import Link from 'next/link';

export function HeroSection({ greeting }: { greeting: string }) {
  return (
    <section id="home" className="relative overflow-hidden h-[90vh] min-h-[600px] max-h-[1080px] flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full animated-gradient -z-10" />
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="fade-in-down">
            <h2 className="text-lg font-semibold text-accent-foreground tracking-widest mb-2 uppercase">{greeting}</h2>
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
              Hi, I&apos;m Aqib Mustafa 👋
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '200ms' }}>
            Software Engineer | Web & App Developer | AI Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{ animationDelay: '400ms' }}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg">
              <Link href="#portfolio">
                View Portfolio <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105 shadow-lg bg-background/50">
              <Link href="/aqib-mustafa-cv.pdf" download target="_blank">
                Download CV <Download className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
