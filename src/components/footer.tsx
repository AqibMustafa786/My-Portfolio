"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Work", href: "/#projects" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Socials",
      links: [
        { name: "GitHub", href: "https://github.com/AqibMustafa786" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/aqib-surahio-355363294/" },
        { name: "Fiverr", href: "https://www.fiverr.com/aqibmustafa" },
      ],
    },
  ];

  return (
    <footer className="relative bg-background pt-32 pb-16 overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-8">
              <span className="text-3xl font-bold tracking-tight text-foreground">
                Aqib<span className="text-primary"> MS</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-10 text-sm font-medium">
              Crafting premium digital experiences with modern web technologies. Specialized in high-performance applications.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/AqibMustafa786" className="w-12 h-12 rounded-2xl bg-card border border-border hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all shadow-xl flex items-center justify-center" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" className="w-12 h-12 rounded-2xl bg-card border border-border hover:bg-[#0077b5] hover:text-white text-muted-foreground transition-all shadow-xl flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:aqib2k1@gmail.com" className="w-12 h-12 rounded-2xl bg-card border border-border hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all shadow-xl flex items-center justify-center" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold tracking-wider text-foreground mb-10">{column.title}</h3>
              <ul className="space-y-6">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-4 group"
                    >
                      <span className="w-0 group-hover:w-4 h-[2px] bg-primary transition-all rounded-full" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-muted-foreground text-xs font-medium tracking-wide leading-none">
            © {currentYear} Aqib Mustafa. Executed with Precision.
          </p>
          <div className="flex items-center gap-8">
             {/* Removed Powered By Label */}
          </div>
        </div>
      </div>
    </footer>
  );
}
