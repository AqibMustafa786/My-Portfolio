"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Layers, Globe, Code, User, Award } from "lucide-react";

export function AboutSection() {
    const stats = [
        { label: "Years Experience", value: "3+", icon: Globe },
        { label: "Projects Completed", value: "50+", icon: Code },
        { label: "Happy Clients", value: "40+", icon: User },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] max-w-sm mx-auto">
                            {/* Decorative frames */}
                            <div className="absolute -inset-4 border border-rose-500/20 rounded-[2rem] -rotate-6" />
                            <div className="absolute -inset-4 border border-black/5 rounded-[2rem] rotate-3" />
                            
                            <div className="relative h-full rounded-[1.5rem] overflow-hidden bg-zinc-50 border border-zinc-100 group shadow-2xl">
                                <Image
                                    src="/assets/my-picture.png"
                                    alt="Aqib Mustafa"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                                
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="text-2xl font-black text-white font-headline italic tracking-tighter">Aqib Mustafa</div>
                                    <div className="text-rose-400 text-xs font-black uppercase tracking-widest">Full Stack Engineer</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl lg:text-6xl font-black mb-8 text-black font-headline tracking-tighter italic">
                            About <span className="text-rose-600 NOT-italic">Me</span>
                        </h2>

                        <div className="space-y-8 text-zinc-600 text-lg leading-relaxed italic">
                            <p>
                                I’m a passionate <span className="text-black font-black underline decoration-rose-500/50 decoration-4">Software Engineer</span> and Computer Science graduate from SZABIST, specializing in building premium digital solutions.
                            </p>
                            <p>
                                With over <span className="text-black font-black">3+ years</span> of experience, I excel in creating scalable web applications, cross-platform mobile apps with Flutter, and automated business systems.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-6 mt-12">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-6 rounded-[1.5rem] bg-zinc-50 border border-zinc-100 text-center hover:border-rose-500 transition-all shadow-sm group">
                                    <div className="text-3xl lg:text-4xl font-black text-black font-headline mb-2 group-hover:text-rose-600 transition-colors uppercase tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black italic">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-rose-500/5 border border-rose-500/10 text-rose-600 text-[10px] font-black uppercase tracking-widest italic">
                                <BookOpen className="w-4 h-4" />
                                <span>Continuous Learner</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest italic tracking-widest">
                                <Layers className="w-4 h-4" />
                                <span>Scalable Architecture</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
