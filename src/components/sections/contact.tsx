"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
<<<<<<< HEAD
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Github, Linkedin, Mail, Loader2, MessageSquare, Phone } from "lucide-react";
=======
import { Send, Github, Linkedin, Mail, Loader2 } from "lucide-react";
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // IMPORTANT: This URL should be your actual Google Apps Script Web App URL
<<<<<<< HEAD
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwzsQk3PXH1-cb53O1LIWpXmrasuFgazCHDYqTJCKb4HD4cjZFoAeQJVS4DFqahSnLR/exec";
=======
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyy-xxjpiEQRVrKWjXTjGk7hqAOQskaqq-tZaeI44yUHvUhW8FsvO1P_cJPXVObwJ05/exec";
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
<<<<<<< HEAD

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
=======
  
    const form = e.currentTarget;
    const formData = new FormData(form);
  
    try {
      // We use `mode: 'no-cors'` because Google Apps Script web apps often have
      // strict CORS policies. This mode allows us to send the data ("fire and forget")
      // without trying to read the response, which would be blocked by the browser.
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

<<<<<<< HEAD
=======
      // Since we can't read the response in 'no-cors' mode, we can't be 100% sure
      // it was successful. We optimistically show a success message.
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
<<<<<<< HEAD

=======
  
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
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
<<<<<<< HEAD
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or want to discuss a new opportunity? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Contact Info / Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's Build Something Great</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm currently available for freelance projects and remote opportunities.
              Whether you need a Flutter app, a SaaS platform, or AppSheet automation,
              I'm here to help bring your ideas to life.
            </p>

            <div className="space-y-6">
              <a href="mailto:aqib2k1@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Me</p>
                  <p className="text-lg font-semibold">aqib2k1@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/923173276706" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp / Phone</p>
                  <p className="text-lg font-semibold">+92 317 3276706</p>
                </div>
              </a>

              <a href="https://www.fiverr.com/aqibmustafa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Hire on Fiverr</p>
                  <p className="text-lg font-semibold">Check My Gigs</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="https://github.com/AqibMustafa786" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Name</label>
                  <Input name="name" type="text" placeholder="John Doe" className="bg-black/20 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-600" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Email</label>
                  <Input name="email" type="email" placeholder="john@example.com" className="bg-black/20 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-600" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Project Categorization</label>
                <Select name="service" required>
                  <SelectTrigger className="bg-black/20 border-white/10 focus:border-purple-500/50 text-white">
                    <SelectValue placeholder="Select core service" />
                  </SelectTrigger>
                  <SelectContent>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Estimated Budget</label>
                  <Select name="budget">
                    <SelectTrigger className="bg-black/20 border-white/10 focus:border-purple-500/50 text-white">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<1k">Less than $1,000</SelectItem>
                      <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                      <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value=">10k">More than $10,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Timeline</label>
                  <Select name="timeline">
                    <SelectTrigger className="bg-black/20 border-white/10 focus:border-purple-500/50 text-white">
                      <SelectValue placeholder="Select deadline" />
                    </SelectTrigger>
                    <SelectContent>
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
                <label className="text-sm text-gray-400 ml-1">Project Details</label>
                <Textarea name="message" placeholder="Briefly describe your business goals and requirements..." className="bg-black/20 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-600 min-h-[120px]" required />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-purple-900/20" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Inquiry...
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
=======
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
          <Input name="name" type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white border border-black/10 dark:border-white/20 focus:ring-purple-500" required />
          <Input name="email" type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white border border-black/10 dark:border-white/20 focus:ring-purple-500" required />
          <Textarea name="message" placeholder="Your Message" className="w-full p-3 rounded-lg bg-black/5 dark:bg-white/10 text-gray-800 dark:text-white border border-black/10 dark:border-white/20 h-32 focus:ring-purple-500" required />
          <Button type="submit" className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg shadow-purple-600/30 hover:scale-105 transition" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="ml-2" />
              </>
            )}
          </Button>
        </motion.form>
        
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-10"
        >
          <a href="https://github.com/AqibMustafa786" target="_blank" rel="noopener noreferrer" className="hover:scale-125 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/aqib-surahio-355363294/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300">
            <Linkedin size={28} />
          </a>
          <a href="mailto:aqib2k1@gmail.com" className="hover:scale-125 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300">
            <Mail size={28} />
          </a>
        </motion.div>
>>>>>>> 9b17483b1c20511f609e0b2dbbc5b1795e822fb7
      </div>
    </section>
  );
}
