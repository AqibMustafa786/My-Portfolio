"use client"
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-lg"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wider text-white">
          AquaFolio
        </Link>
        {/* ThemeToggle can be re-enabled if needed, but the new design is dark by default */}
        {/* <ThemeToggle /> */}
      </div>
    </motion.header>
  );
}
