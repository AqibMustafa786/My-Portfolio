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
    <footer className="relative bg-white pt-32 pb-16 overflow-hidden border-t border-zinc-50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-10 group">
              <div className="w-14 h-14 rounded-[1.25rem] bg-black flex items-center justify-center text-white font-black text-3xl shadow-2xl group-hover:bg-rose-600 transition-all font-headline">
                A
              </div>
              <span className="text-3xl font-black italic uppercase tracking-tighter text-black font-headline">
                Aqib<span className="text-rose-600">.dev</span>
              </span>
            </Link>
            <p className="text-zinc-500 leading-relaxed mb-10 italic text-sm font-medium">
              Crafting premium digital experiences with modern web technologies. Specialized in high-performance applications.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/AqibMustafa786" className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-black hover:text-white text-zinc-600 transition-all shadow-xl flex items-center justify-center" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-[#0077b5] hover:text-white text-zinc-600 transition-all shadow-xl flex items-center justify-center" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:aqib2k1@gmail.com" className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-rose-600 hover:text-white text-zinc-600 transition-all shadow-xl flex items-center justify-center" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-10 font-headline italic">{column.title}</h3>
              <ul className="space-y-6">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-black text-zinc-800 hover:text-rose-600 transition-colors flex items-center gap-4 group italic"
                    >
                      <span className="w-0 group-hover:w-4 h-[2px] bg-rose-600 transition-all rounded-full" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] italic leading-none">
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
