"use client";

import { services } from "@/data/services";
import { AnimatedCard } from "@/components/ui/animated-card";
import { motion } from "framer-motion";

export const SkillsModern = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-white" id="skills">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl lg:text-6xl font-black mb-8 text-black font-headline tracking-tighter italic">
                        Skills & <span className="text-rose-600 not-italic">Services</span>
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto italic font-medium">
                        Leveraging cutting-edge technologies to build scalable, high-performance applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedCard key={service.id} delay={index * 0.1}>
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-600 group-hover:text-white transition-all border border-zinc-100 group-hover:border-rose-600 shadow-sm relative z-10">
                                    <Icon className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-black font-headline tracking-tight group-hover:text-rose-600 transition-colors uppercase italic">{service.title}</h3>
                                <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-600 transition-colors italic">
                                    {service.description}
                                </p>
                            </AnimatedCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
