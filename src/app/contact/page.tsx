"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    // Replace with your Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz9YDBU5-rHbUHzEZkg8tJ4DiQlaffr86-i8wNQLQIeinvdpqTmtYxrVG_tE69AO2Yp/exec';

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                // Using URLSearchParams sets standard Content-Type: application/x-www-form-urlencoded
                body: new URLSearchParams({
                    'name': formData.name,
                    'email': formData.email,
                    'service': formData.subject || "General Inquiry",
                    'budget': "Not Specified",
                    'timeline': "Not Specified",
                    'message': formData.message
                })
            });

            // Note: Google Apps Script Web Apps may return opaque responses (CORS) 
            // potentially causing JSON parsing to fail if not configured efficiently.
            // However, we attempt to parse it. If it fails due to CORS, the catch block might not catch it if it's just opaque.
            // Actually, fetch without mode: 'no-cors' will throw if CORS headers are missing.
            // We'll assume the user might not have CORS set up, so we'll wrap in try/catch and detailed alert.

            const result = await response.json();

            if (result.result === 'success') {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            } else {
                alert("Error sending message: " + (result.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Submission error:", error);
            // If CORS error occurs but data was sent, it might still have worked.
            alert("Submission attempted. If you don't receive a confirmation, please check the console or try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans relative overflow-x-hidden">
            <Navbar />

            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-rose-600 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block italic">Project Initiation</span>
                        <h1 className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.8] text-black mb-12 font-headline">
                            Get In <span className="text-rose-600 not-italic">Touch</span>
                        </h1>
                        <p className="text-zinc-500 text-xl max-w-3xl mx-auto italic font-medium leading-relaxed border-x border-zinc-100 px-16">
                            Have a vision? Let&apos;s architect something exceptional together. 
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-12"
                    >
                        <div className="bg-zinc-50 p-12 rounded-[3.5rem] border border-zinc-100">
                            <h3 className="text-3xl font-black mb-12 font-headline italic uppercase tracking-tighter">Contact Protocol</h3>
                            <div className="space-y-10">
                                <div className="group flex items-start gap-8">
                                    <div className="p-5 bg-white rounded-2xl text-black border border-zinc-100 shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-all duration-500">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="font-black text-black uppercase tracking-widest text-[9px] mb-1 italic">Direct Channel</div>
                                        <a href="mailto:aqib2k1@gmail.com" className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-500 hover:text-rose-600 transition-colors">aqib2k1@gmail.com</a>
                                    </div>
                                </div>
                                <div className="group flex items-start gap-8">
                                    <div className="p-5 bg-white rounded-2xl text-black border border-zinc-100 shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-all duration-500">
                                        <Phone className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="font-black text-black uppercase tracking-widest text-[9px] mb-1 italic">Vocal Network</div>
                                        <div className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-500">+92 317 3276706</div>
                                    </div>
                                </div>
                                <div className="group flex items-start gap-8">
                                    <div className="p-5 bg-white rounded-2xl text-black border border-zinc-100 shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-all duration-500">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="font-black text-black uppercase tracking-widest text-[9px] mb-1 italic">Base Location</div>
                                        <div className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-500">Karachi, Pakistan</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-12 rounded-[3.5rem] bg-black text-white shadow-2xl">
                            <h3 className="text-2xl font-black mb-4 font-headline italic uppercase tracking-tighter">Current Deployment</h3>
                            <p className="text-rose-600 font-black flex items-center gap-3 mb-8 uppercase tracking-widest text-[10px] italic">
                                <span className="w-3 h-3 rounded-full bg-rose-600 animate-pulse" />
                                Accepting Priority Projects
                            </p>
                            <p className="text-zinc-400 italic font-medium text-lg leading-relaxed mb-10 border-l border-zinc-800 pl-8">
                                Available for enterprise consulting, SaaS development, and bespoke digital architecture.
                            </p>
                            <a href="https://www.fiverr.com/aqibmustafa" target="_blank" rel="noopener noreferrer" className="w-full block py-6 bg-white text-black text-center font-black rounded-2xl hover:bg-rose-600 hover:text-white transition-all font-headline italic uppercase tracking-[0.3em] text-[10px]">
                                Secure On Fiverr
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="bg-zinc-50 p-12 md:p-16 rounded-[3.5rem] border border-zinc-100 h-full"
                    >
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-black uppercase tracking-[0.4em] italic pl-2">Subject Identity</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-zinc-100 rounded-2xl px-8 py-5 text-black font-medium focus:outline-none focus:border-rose-600 transition-all shadow-sm"
                                        placeholder="Identification"
                                        required
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-black uppercase tracking-[0.4em] italic pl-2">Digital Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white border border-zinc-100 rounded-2xl px-8 py-5 text-black font-medium focus:outline-none focus:border-rose-600 transition-all shadow-sm"
                                        placeholder="Email Link"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-black uppercase tracking-[0.4em] italic pl-2">Inquiry Type</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-zinc-100 rounded-2xl px-8 py-5 text-black font-medium focus:outline-none focus:border-rose-600 transition-all shadow-sm"
                                    placeholder="Project Classification"
                                    required
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-black uppercase tracking-[0.4em] italic pl-2">Transmission Data</label>
                                <textarea
                                    rows={6}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white border border-zinc-100 rounded-2xl px-8 py-5 text-black font-medium focus:outline-none focus:border-rose-600 transition-all shadow-sm resize-none"
                                    placeholder="Briefing details..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-7 bg-black rounded-2xl font-black text-white text-[11px] uppercase tracking-[0.4em] italic hover:bg-rose-600 transition-all shadow-2xl shadow-zinc-200 flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed font-headline"
                            >
                                {isSubmitting ? "Transmitting..." : "Send Message"}
                                {!isSubmitting && <Send className="w-5 h-5" />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
