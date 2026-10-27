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
    { name: "Projects", href: "/#projects" },
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
            ? "py-3 bg-background/90 backdrop-blur-2xl shadow-xl"
            : "py-4 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group">
            <span className="text-2xl font-bold tracking-tight text-foreground hidden sm:block">
              Aqib<span className="text-primary"> MS</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-card p-1.5 rounded-full border border-border backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 p-3 text-foreground bg-card rounded-2xl border border-border shadow-xl"
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
            className="fixed inset-0 z-40 bg-background md:hidden flex flex-col justify-start items-center px-6 pt-20 overflow-y-auto overscroll-contain"
          >
            <style jsx global>{`
              .no-scrollbar::-webkit-scrollbar { display: none; }
              .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            
            <div className="flex flex-col gap-4 text-center w-full no-scrollbar overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-xl xs:text-2xl font-semibold text-foreground hover:text-primary transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-col gap-6 items-center pb-8 w-full"
            >
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full max-w-xs px-10 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-xl hover:opacity-90 transition-all text-center"
              >
                Start a Project
              </Link>

              <div className="flex justify-center gap-6 mt-2">
                <a href="https://github.com/AqibMustafa786" className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all shadow-lg" aria-label="Github">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-[#0077b5] hover:text-white transition-all shadow-lg" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
