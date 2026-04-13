"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Moon, Sun, Menu, X, Github, Linkedin, Smartphone } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/#skills" },
    { name: "Work", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "About", href: "/#about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-2xl border-b border-zinc-100 shadow-2xl shadow-zinc-200/10"
            : "py-4 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:bg-rose-600 transition-all font-headline">
              A
            </div>
            <span className="text-2xl font-black italic uppercase tracking-tighter text-black hidden sm:block font-headline">
              Aqib<span className="text-rose-600">.dev</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-50 p-1.5 rounded-full border border-zinc-100 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 hover:text-black transition-colors rounded-full italic font-headline"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-rose-600 shadow-2xl shadow-zinc-200 transition-all active:scale-95 font-headline italic"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 p-3 text-black bg-zinc-50 rounded-2xl border border-zinc-100 shadow-xl"
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden flex flex-col justify-center items-center px-6"
          >
            <div className="flex flex-col gap-12 text-center w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl xs:text-5xl font-black italic uppercase tracking-tighter text-black hover:text-rose-600 transition-colors block font-headline leading-[0.8]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-16 flex flex-col gap-8 items-center"
              >
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full max-w-xs px-16 py-7 rounded-[2rem] bg-black text-white font-black italic uppercase tracking-[0.3em] text-xs shadow-2xl hover:bg-rose-600 transition-all font-headline"
                >
                  Start a Project
                </Link>

                <div className="flex justify-center gap-10 mt-10">
                  <a href="https://github.com/AqibMustafa786" className="w-16 h-16 rounded-[1.5rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-black hover:text-white transition-all shadow-xl" aria-label="Github">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" className="w-16 h-16 rounded-[1.5rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-[#0077b5] hover:text-white transition-all shadow-xl" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
