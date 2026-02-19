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
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[128px]" />
            </div>

            <main className="pt-32 pb-20 container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Get in <span className="text-purple-400">Touch</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Have a project in mind? Let's build something amazing together.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Email</div>
                                        <a href="mailto:contact@aqib.dev" className="text-gray-400 hover:text-white transition-colors">contact@aqib.dev</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Phone</div>
                                        <div className="text-gray-400">+1 (000) 000-0000</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">Location</div>
                                        <div className="text-gray-400">Remote / Available Worldwide</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10">
                            <h3 className="text-xl font-bold mb-2">Freelance Availability</h3>
                            <p className="text-green-400 font-medium flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Available for new projects
                            </p>
                            <p className="text-gray-400 text-sm mb-6">
                                I am currently accepting new freelance projects on Fiverr and Upwork.
                                Response time: &lt; 24 hours.
                            </p>
                            <a href="https://www.fiverr.com/aqibmustafa" target="_blank" className="w-full block py-3 bg-white text-black text-center font-bold rounded-xl hover:bg-gray-100 transition-colors">
                                Hire Me on Fiverr
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Project Inquiry"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-bold text-white text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
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
