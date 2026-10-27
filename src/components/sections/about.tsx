"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Layers, Globe, Code, User } from "lucide-react";

export function AboutSection() {
    const stats = [
        { label: "Years Experience", value: "3+", icon: Globe },
        { label: "Projects Completed", value: "50+", icon: Code },
        { label: "Happy Clients", value: "5", icon: User },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
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
                            <div className="absolute -inset-4 border border-primary/20 rounded-[2rem] -rotate-6" />
                            <div className="absolute -inset-4 border border-border rounded-[2rem] rotate-3" />

                            <div className="relative h-full rounded-[1.5rem] overflow-hidden bg-card border border-border group shadow-2xl">
                                <Image
                                    src="/assets/my-picture.png"
                                    alt="Aqib Mustafa"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="text-xl font-semibold text-white">Aqib Mustafa</div>
                                    <div className="text-primary text-xs font-medium tracking-wider mt-1">Full Stack Engineer</div>
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
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                            About <span className="text-primary">Me</span>
                        </h2>

                        <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                            <p>
                                I am <span className="text-foreground font-semibold">Aqib Mustafa</span>, a dedicated Software Engineer and Computer Science graduate from SZABIST. My professional journey is driven by a commitment to engineering excellence, specializing in complex web architectures and cross-platform mobile ecosystems.
                            </p>
                            <p>
                                With over <span className="text-foreground font-semibold">3+ years of professional experience</span>, I have successfully delivered 50+ high-impact projects. My core expertise lies in developing scalable SaaS products, high-performance Firebase applications, and robust business automation using AppSheet.
                            </p>
                            <p>
                                Whether it&apos;s architecting a custom CRM, building a real-time dashboard, or deploying a Flutter application, my focus is always on speed, security, and precision.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mt-10">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-5 rounded-2xl bg-card border border-border text-center hover:border-primary transition-all shadow-sm group">
                                    <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                                <BookOpen className="w-4 h-4" />
                                <span>Continuous Learner</span>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-card border border-border text-muted-foreground text-xs font-medium">
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
