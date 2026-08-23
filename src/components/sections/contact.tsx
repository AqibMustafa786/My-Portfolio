"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Github, Linkedin, Mail, Loader2, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { serverTimestamp } from "firebase/firestore";

export function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
      createdAt: serverTimestamp(),
      status: "new",
      node: "GLOBAL_PORTFOLIO_NODE"
    };

    try {
      const { db } = await import("@/lib/firebase");
      const { collection, addDoc } = await import("firebase/firestore");
      
      await addDoc(collection(db, "contacts"), data);

      toast({
        title: "Message Sent!",
        description: "Your inquiry has been stored. I'll get back to you soon.",
      });
      form.reset();

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was a problem sending your message. Please try again or email directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Have a project in mind or want to discuss a new opportunity? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          {/* Contact Info / Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s Build Something Great</h3>
            <p className="text-muted-foreground mb-10 leading-relaxed text-sm">
              I&apos;m currently available for freelance projects and remote opportunities. 
              Whether you need a Flutter app, a SaaS platform, or AppSheet automation, 
              I&apos;m here to help bring your ideas to life.
            </p>

            <div className="space-y-6">
              <a href="mailto:aqib2k1@gmail.com" className="flex items-center gap-5 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Email Me</p>
                  <p className="text-base font-semibold">aqib2k1@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/923173276706" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">WhatsApp / Phone</p>
                  <p className="text-base font-semibold">+92 317 3276706</p>
                </div>
              </a>

              <a href="https://www.fiverr.com/aqibmustafa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">Hire on Fiverr</p>
                  <p className="text-base font-semibold">Check My Gigs</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="https://github.com/AqibMustafa786" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all" aria-label="Github">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">Full Name</label>
                  <Input name="name" type="text" placeholder="John Doe" className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50 rounded-xl py-5 px-4 text-sm" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">Email Address</label>
                  <Input name="email" type="email" placeholder="john@example.com" className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50 rounded-xl py-5 px-4 text-sm" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Project Category</label>
                <Select name="service" required>
                  <SelectTrigger aria-label="Project Category" className="bg-background border-border focus:border-primary text-foreground rounded-xl py-5 px-4 text-sm h-auto">
                    <SelectValue placeholder="Select core service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-border bg-card">
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="mobile-app">Mobile Application</SelectItem>
                    <SelectItem value="saas">SaaS Product</SelectItem>
                    <SelectItem value="admin-panel">Admin Dashboard</SelectItem>
                    <SelectItem value="crm-cms">CRM / CMS Solution</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="appsheet">AppSheet Automation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">Budget Range</label>
                  <Select name="budget">
                    <SelectTrigger aria-label="Budget Range" className="bg-background border-border focus:border-primary text-foreground rounded-xl py-5 px-4 text-sm h-auto">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-border bg-card">
                      <SelectItem value="<1k">Less than $1,000</SelectItem>
                      <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                      <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value=">10k">More than $10,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground">Timing</label>
                  <Select name="timeline">
                    <SelectTrigger aria-label="Project Timing" className="bg-background border-border focus:border-primary text-foreground rounded-xl py-5 px-4 text-sm h-auto">
                      <SelectValue placeholder="Select deadline" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-border bg-card">
                      <SelectItem value="ASAP">ASAP (Rush)</SelectItem>
                      <SelectItem value="1-month">Within 1 Month</SelectItem>
                      <SelectItem value="1-3-months">1-3 Months</SelectItem>
                      <SelectItem value="3-6-months">3-6 Months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground">Project Details</label>
                <Textarea name="message" placeholder="Describe your vision and business goals..." className="bg-background border-border focus:border-primary text-foreground placeholder:text-muted-foreground/50 min-h-[140px] rounded-xl p-4 text-sm" required />
              </div>

              <Button type="submit" className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold text-sm py-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
