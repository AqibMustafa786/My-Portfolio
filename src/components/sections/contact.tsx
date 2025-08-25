"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "../scroll-reveal";

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/aqibmustafa' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/aqibmustafa' },
  { name: 'Email', icon: Mail, url: 'mailto:aqib.mustafa@example.com' },
];

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="bg-background">
      <div className="container">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-4 font-headline">Contact Me</h2>
          <p className="max-w-xl mx-auto text-center text-muted-foreground text-lg mb-12">
            Let&apos;s Build Something Great Together 🚀
          </p>
        </ScrollReveal>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal delay={100}>
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." required rows={5} />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold font-headline mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m currently available for freelance projects and full-time opportunities. Feel free to reach out via email or connect with me on social media.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full w-12 h-12 transition-transform hover:scale-110 hover:bg-accent/20">
                  <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-6 w-6 text-foreground" />
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
