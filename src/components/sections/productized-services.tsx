"use client";

import { productizedServices } from "@/data/productized-services";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ProductizedServices() {
    return (
        <section id="services" className="relative py-32 overflow-hidden bg-white selection:bg-rose-500/10">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-black text-[10px] font-black uppercase tracking-[0.3em] text-white mb-8 shadow-2xl shadow-rose-500/20 italic">
                        What I Offer
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-black mb-8 leading-[0.9] font-headline">
                        Productized <span className="text-rose-600 not-italic">Services</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg italic tracking-wide font-medium">
                        Streamlined, high-quality solutions packaged for your business needs. 
                        Transparent pricing and guaranteed delivery.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {productizedServices.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-12 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:border-rose-600 transition-all duration-500 hover:shadow-2xl hover:bg-white flex flex-col h-full"
                            >
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-12 group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 border border-zinc-100 group-hover:border-rose-600 shadow-sm">
                                    <Icon className="w-10 h-10 text-black group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-4xl font-black italic uppercase tracking-tighter text-black mb-8 group-hover:text-rose-600 transition-all leading-[0.8] font-headline">
                                    {service.title}
                                </h3>

                                <p className="text-zinc-500 mb-12 flex-grow leading-relaxed italic text-sm font-medium">
                                    {service.description}
                                </p>

                                <div className="space-y-6 mb-16">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-rose-500/5 flex items-center justify-center flex-shrink-0 border border-rose-500/10">
                                                <Check className="w-4 h-4 text-rose-600" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-10 mt-auto border-t border-zinc-100 flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 italic">Available From</span>
                                    <span className="text-3xl font-black text-black group-hover:text-rose-600 transition-colors italic tracking-tighter font-headline">{service.price}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
