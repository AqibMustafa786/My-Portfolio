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
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[128px]" />
            </div>

            <main className="pt-32 pb-20 container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        About <span className="text-purple-400">Me</span>
                    </h1>
                    <p className="text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
                        Full Stack Developer | Flutter Developer | CRM & SaaS Specialist
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative top-0 lg:sticky lg:top-32"
                    >
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gray-900/50 border border-white/10 relative group">
                            <Image
                                src="/assets/my-picture.png"
                                alt="Aqib Mustafa"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-6 left-6 right-6 z-10">
                                <div className="text-white font-bold text-2xl">Aqib Mustafa</div>
                                <div className="text-purple-400 font-medium">BSCS Graduate, SZABIST</div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-purple-500" />
                                My Journey
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg mb-4">
                                I am a Bachelor of Science in Computer Science (BSCS) graduate from SZABIST University. My academic background provided me with strong foundations in software engineering, data structures, databases, object-oriented programming, and system design. During my degree, I developed a deep interest in building practical software solutions that solve real business problems.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Over the past <span className="text-white font-semibold">3+ years</span>, I have gained professional experience in Web Application Development and AppSheet business solutions, along with <span className="text-white font-semibold">2+ years</span> of hands-on experience in Flutter mobile app development.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <Layers className="w-6 h-6 text-blue-500" />
                                What I Do
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg mb-6">
                                I specialize in building scalable SaaS platforms, CRM systems, admin dashboards, client portals, and workflow automation systems. My focus is always on performance optimization, security, scalability, and modern UI/UX standards.
                            </p>

                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                <h4 className="font-bold text-white mb-4">Technical Expertise</h4>
                                <div className="flex flex-wrap gap-2">
                                    {expertise.map((skill, i) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-purple-500/30 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">{stat.value}</div>
                                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">My Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Continuous Learning", desc: "I constantly upgrade my skills in modern frameworks and cloud backend systems.", icon: BookOpen },
                            { title: "Scalable Architecture", desc: "My goal is to build enterprise-grade SaaS solutions and high-quality software products.", icon: Server },
                            { title: "Security First", desc: "Prioritizing secure authentication, RBAC, and data protection in every application.", icon: ShieldCheck },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </main >
            <Footer />
        </div >
    );
}
