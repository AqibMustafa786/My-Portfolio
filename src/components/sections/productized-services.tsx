"use client";

import { productizedServices } from "@/data/productized-services";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ProductizedServices() {
    return (
        <section id="services" className="relative py-32 overflow-hidden bg-black selection:bg-purple-500/30">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen opacity-20" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 mb-4">
                        What I Offer
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Productized <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Streamlined, high-quality solutions packaged for your business needs.
                        Transparent pricing and guaranteed delivery.
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
                                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-purple-500/20">
                                    <Icon className="w-7 h-7 text-white group-hover:text-purple-400 transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                                            <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-purple-400" />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                                    <span className="text-sm font-medium text-gray-500">From</span>
                                    <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{service.price}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
