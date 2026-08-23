"use client";

import { services } from "@/data/services";
import { AnimatedCard } from "@/components/ui/animated-card";
import { motion } from "framer-motion";

export const SkillsModern = () => {
    return (
        <section className="relative py-28 overflow-hidden" id="skills">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                        Skills & <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to build scalable, high-performance applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedCard key={service.id} delay={index * 0.1}>
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all border border-primary/20 relative z-10">
                                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
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
