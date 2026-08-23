"use client";

import { productizedServices } from "@/data/productized-services";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ProductizedServices() {
    return (
        <section id="services" className="relative py-28 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1.5 px-5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 border border-primary/20">
                        What I Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Productized <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                        Streamlined, high-quality solutions packaged for your business needs. Transparent pricing and guaranteed delivery.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productizedServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 border border-primary/20">
                                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-all">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-sm">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 mt-auto border-t border-border flex items-center justify-between">
                                    <span className="text-xs font-medium text-muted-foreground">Available From</span>
                                    <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{service.price}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
