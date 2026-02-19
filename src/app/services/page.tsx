"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[128px]" />
            </div>

            <main className="pt-32 pb-20 container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        My <span className="text-purple-400">Services</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs, from mobile apps to automated workflows.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-purple-500/30 transition-colors"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-purple-500/20 transition-colors" />

                                <div className="relative z-10 grid md:grid-cols-[auto,1fr,auto] gap-8 items-start">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                        <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                                            {service.description}
                                        </p>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            {["High Performance", "Scalable Architecture", "Modern Design", "Secure Code"].map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                                                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Link
                                            href="/contact"
                                            className="px-6 py-3 bg-white text-black rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors"
                                        >
                                            Book Now <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <div className="text-center text-gray-500 text-sm">
                                            Starting at $100
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </div>
    );
}
