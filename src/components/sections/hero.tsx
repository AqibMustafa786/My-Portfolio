"use client";
import { Button } from "@/components/ui/button";
import { Download, MoveRight } from "lucide-react";
import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroSection({ greeting }: { greeting: string }) {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold text-gradient"
      >
        Hi, I&apos;m Aqib Mustafa 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-xl md:text-2xl text-gray-300"
      >
        Software Engineer | Web & App Developer | AI Enthusiast
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Button asChild size="lg" className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg shadow-purple-600/30 hover:scale-105 transition-transform duration-300">
          <Link href="#portfolio">
            View Portfolio <MoveRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        {/* Add your CV to the public folder and uncomment the link below */}
        <Button asChild size="lg" variant="outline" className="px-6 py-3 rounded-full bg-white/10 border-white/30 text-white font-medium backdrop-blur-lg hover:scale-105 transition-transform duration-300 hover:bg-white/20 hover:text-white">
          <Link href="/aqib-mustafa-cv.pdf" download target="_blank">
            Download CV <Download className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
