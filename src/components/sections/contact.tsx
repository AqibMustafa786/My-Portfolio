"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="bg-white/50 dark:bg-black/50 backdrop-blur-lg rounded-t-3xl">
      <div className="container text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Let’s Build Something Great Together 🚀
        </motion.p>
        
        <motion.form 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4"
        >
          <Input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white border border-black/10 dark:border-white/20 focus:ring-purple-500" required />
          <Input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white border border-black/10 dark:border-white/20 focus:ring-purple-500" required />
          <Textarea placeholder="Your Message" className="w-full p-3 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white border border-black/10 dark:border-white/20 h-32 focus:ring-purple-500" required />
          <Button type="submit" className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg shadow-purple-600/30 hover:scale-105 transition">
            Send Message <Send className="ml-2" />
          </Button>
        </motion.form>
        
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-10"
        >
          <a href="https://github.com/aqibmustafa" target="_blank" rel="noopener noreferrer" className="hover:scale-125 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/aqibmustafa" target="_blank" rel="noopener noreferrer" className="hover:scale-125 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300">
            <Linkedin size={28} />
          </a>
          <a href="mailto:aqib.mustafa@example.com" className="hover:scale-125 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
