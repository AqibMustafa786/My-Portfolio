"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Globe, User, Award, Zap, BookOpen, Layers, Server, ShieldCheck, Database, Smartphone } from "lucide-react";

export default function AboutPage() {
    const stats = [
        { label: "Years Experience", value: "3+", icon: Globe },
        { label: "Projects Completed", value: "50+", icon: Code },
        { label: "Happy Clients", value: "40+", icon: User },
    ];

    const expertise = [
        "Flutter (Android & iOS)", "Dart Programming", "Firebase Auth & Firestore",
        "Role-Based Access Control", "Structured DB Design", "AppSheet Development",
        "Responsive Web Apps", "REST API Integration", "Clean Architecture"
    ];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans relative overflow-x-hidden">
            <Navbar />

            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center mb-32"
                >
                    <span className="text-rose-600 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block italic">Personal Directive</span>
                    <h1 className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.8] text-black mb-12 font-headline">
                        The Developer <br /> <span className="text-rose-600 not-italic">Behind The Code</span>
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-24 items-start max-w-7xl mx-auto mb-48">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative lg:sticky lg:top-40"
                    >
                        <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden bg-zinc-50 border border-zinc-100 relative group shadow-2xl">
                            <Image
                                src="/assets/my-picture.png"
                                alt="Aqib Mustafa"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                            <div className="absolute bottom-10 left-10 right-10 z-10">
                                <div className="text-white font-black text-4xl font-headline italic uppercase tracking-tighter mb-2">Aqib Mustafa</div>
                                <div className="text-rose-600 font-black text-xs uppercase tracking-[0.3em] italic">BSCS Graduate, SZABIST</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-16"
                    >
                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-[2px] bg-rose-600" />
                                <h3 className="text-3xl font-black text-black font-headline italic uppercase tracking-tighter">My Journey</h3>
                            </div>
                            <p className="text-zinc-500 leading-relaxed text-xl mb-4 italic font-medium border-l-[6px] border-zinc-100 pl-10">
                                I am a Bachelor of Science in Computer Science (BSCS) graduate from SZABIST University. My academic background provided me with strong foundations in software engineering, data structures, and system design.
                            </p>
                            <p className="text-zinc-500 leading-relaxed text-xl italic font-medium">
                                Over the past <span className="text-black font-black">3+ years</span>, I have gained professional experience in Web Application Development and AppSheet business solutions, along with <span className="text-black font-black">2+ years</span> of hands-on experience in Flutter mobile app development.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-[2px] bg-black" />
                                <h3 className="text-3xl font-black text-black font-headline italic uppercase tracking-tighter">Core Competencies</h3>
                            </div>
                            <p className="text-zinc-500 leading-relaxed text-xl italic font-medium">
                                I specialize in building scalable SaaS platforms, CRM systems, admin dashboards, and workflow automation. My focus is always on performance optimization, security, and modern UI/UX standards.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {expertise.map((skill, i) => (
                                    <span key={i} className="px-6 py-3 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:border-black hover:text-black transition-all italic">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-zinc-50">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-left group">
                                    <div className="text-4xl md:text-5xl font-black text-black font-headline group-hover:text-rose-600 transition-colors italic tracking-tighter">{stat.value}</div>
                                    <div className="text-[9px] font-black text-zinc-300 uppercase tracking-[0.3em] italic mt-2">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="max-w-7xl mx-auto border-t border-zinc-50 pt-32">
                    <span className="text-rose-600 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block italic text-center">Operational Ethics</span>
                    <h2 className="text-5xl font-black text-center mb-24 font-headline italic uppercase tracking-tighter">Strategic Values</h2>
                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            { title: "Continuous Evolution", desc: "I constantly upgrade my skills in modern frameworks and cloud backend systems.", icon: BookOpen },
                            { title: "Scalable Architecture", desc: "My goal is to build enterprise-grade SaaS solutions and high-quality software products.", icon: Server },
                            { title: "Defense Integrity", desc: "Prioritizing secure authentication, RBAC, and data protection in every application.", icon: ShieldCheck },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:border-rose-600 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-rose-500/5"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black mb-10 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 border border-zinc-100 shadow-sm">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-black font-headline tracking-tighter uppercase italic">{item.title}</h3>
                                <p className="text-zinc-500 italic font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
