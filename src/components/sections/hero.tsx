"use client";
import { Button } from "@/components/ui/button";
import { Download, MoveRight } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  greeting: string;
}

export function HeroSection({ greeting }: HeroSectionProps) {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-[100vh] text-center pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-rose-600 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block italic">Engineered Excellence</span>
          <h1 className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.8] text-black mb-12 font-headline">
            Aqib <br /> Mustafa
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-zinc-500 italic font-medium leading-relaxed mb-16 px-6 border-x border-zinc-100">
            Crafting high-performance digital experiences through <span className="text-black font-black">advanced software engineering</span> and modern design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button asChild size="lg" className="h-16 px-12 rounded-full bg-black text-white font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 shadow-2xl shadow-zinc-200 transition-all duration-500 hover:scale-110 active:scale-95 font-headline italic">
              <Link href="#projects">
                View Portfolio <MoveRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 rounded-full border-2 border-black text-black font-black uppercase tracking-[0.3em] text-[10px] hover:bg-black hover:text-white transition-all duration-500 hover:scale-110 active:scale-95 font-headline italic">
              <a href="/resume.pdf" download="Aqib_Mustafa_Resume.pdf">
                Download CV <Download className="ml-3 h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Branding */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rotate-90 hidden lg:block">
        <span className="text-[10px] font-black uppercase tracking-[1em] text-zinc-200 italic">Portfolio 2026 Edition</span>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 -rotate-90 hidden lg:block">
        <span className="text-[10px] font-black uppercase tracking-[1em] text-zinc-200 italic">2026 Edition</span>
      </div>
    </section>
  );
}
