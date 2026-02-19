"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
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
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden border-t border-white/10">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[128px]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-purple-500/50 transition-all">
                A
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Aqib<span className="text-purple-500">.dev</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Crafting premium digital experiences with modern web technologies. Specialized in high-performance applications.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/AqibMustafa786" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-blue-400 text-gray-400 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@aqib.dev" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-purple-400 text-gray-400 transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold text-white mb-6 text-lg">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Aqib Mustafa. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
