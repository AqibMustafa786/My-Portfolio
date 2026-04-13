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

export function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // IMPORTANT: This URL should be your actual Google Apps Script Web App URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwzsQk3PXH1-cb53O1LIWpXmrasuFgazCHDYqTJCKb4HD4cjZFoAeQJVS4DFqahSnLR/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white selection:bg-rose-500/10">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-6xl font-black italic uppercase tracking-tighter text-black mb-8 font-headline leading-tight">Get In <span className="text-rose-600 not-italic">Touch</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg italic tracking-wide font-medium">
            Have a project in mind or want to discuss a new opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto items-center">
          {/* Contact Info / Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-black italic uppercase tracking-tighter text-black mb-10 leading-[0.8] font-headline">Let's Build <br /> Something Great</h3>
            <p className="text-zinc-500 mb-12 leading-relaxed text-lg italic font-medium">
              I'm currently available for freelance projects and remote opportunities. 
              Whether you need a Flutter app, a SaaS platform, or AppSheet automation, 
              I'm here to help bring your ideas to life.
            </p>

            <div className="space-y-10">
              <a href="mailto:aqib2k1@gmail.com" className="flex items-center gap-8 text-black hover:text-rose-600 transition-colors group">
                <div className="w-16 h-16 rounded-[1.25rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all shadow-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em] mb-2 italic">Email Me</p>
                  <p className="text-2xl font-black tracking-tighter font-headline">aqib2k1@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/923173276706" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 text-black hover:text-rose-600 transition-colors group">
                <div className="w-16 h-16 rounded-[1.25rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all shadow-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em] mb-2 italic">WhatsApp / Phone</p>
                  <p className="text-2xl font-black tracking-tighter font-headline">+92 317 3276706</p>
                </div>
              </a>

              <a href="https://www.fiverr.com/aqibmustafa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 text-black hover:text-black transition-colors group">
                <div className="w-16 h-16 rounded-[1.25rem] bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em] mb-2 italic">Hire on Fiverr</p>
                  <p className="text-2xl font-black tracking-tighter font-headline">Check My Gigs</p>
                </div>
              </a>
            </div>

            <div className="flex gap-6 mt-16">
              <a href="https://github.com/AqibMustafa786" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-xl" aria-label="Github">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all shadow-xl" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 border border-zinc-100 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group hover:bg-white hover:border-rose-600 transition-all duration-500 shadow-zinc-200"
          >
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1 italic">Full Name</label>
                  <Input name="name" type="text" placeholder="John Doe" className="bg-white border-zinc-100 focus:border-rose-600 text-black placeholder:text-zinc-200 rounded-2xl py-8 px-6 text-sm font-medium italic" required />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1 italic">Email Address</label>
                  <Input name="email" type="email" placeholder="john@example.com" className="bg-white border-zinc-100 focus:border-rose-600 text-black placeholder:text-zinc-200 rounded-2xl py-8 px-6 text-sm font-medium italic" required />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1 italic">Project Category</label>
                <Select name="service" required>
                  <SelectTrigger aria-label="Project Category" className="bg-white border-zinc-100 focus:border-rose-600 text-black rounded-2xl py-8 px-6 text-sm font-medium italic h-auto">
                    <SelectValue placeholder="Select core service" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-zinc-100">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1 italic">Budget Range</label>
                  <Select name="budget">
                    <SelectTrigger aria-label="Budget Range" className="bg-white border-zinc-100 focus:border-rose-600 text-black rounded-2xl py-8 px-6 text-sm font-medium italic h-auto">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-zinc-100">
                      <SelectItem value="<1k">Less than $1,000</SelectItem>
                      <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                      <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value=">10k">More than $10,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1 italic">Timing</label>
                  <Select name="timeline">
                    <SelectTrigger aria-label="Project Timing" className="bg-white border-zinc-100 focus:border-rose-600 text-black rounded-2xl py-8 px-6 text-sm font-medium italic h-auto">
                      <SelectValue placeholder="Select deadline" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-zinc-100">
                      <SelectItem value="ASAP">ASAP (Rush)</SelectItem>
                      <SelectItem value="1-month">Within 1 Month</SelectItem>
                      <SelectItem value="1-3-months">1-3 Months</SelectItem>
                      <SelectItem value="3-6-months">3-6 Months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 ml-1 italic">Project Deep Dive</label>
                <Textarea name="message" placeholder="Describe your vision and business goals..." className="bg-white border-zinc-100 focus:border-rose-600 text-black placeholder:text-zinc-200 min-h-[160px] rounded-[1.5rem] p-6 text-sm font-medium italic" required />
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-rose-600 text-white font-black uppercase tracking-[0.4em] text-xs py-10 rounded-[1.5rem] shadow-2xl transition-all active:scale-95 font-headline" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-4 h-5 w-5 animate-spin" />
                    Processing Initiative...
                  </>
                ) : (
                  <>
                    Send Inquiry <Send className="ml-4 w-5 h-5" />
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
