"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans relative overflow-x-hidden">
            <Navbar />

            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-rose-600 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block italic">Tailored Capabilities</span>
                        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] text-black mb-12 font-headline">
                            Professional <span className="text-rose-600 not-italic">Services</span>
                        </h1>
                        <p className="text-zinc-500 text-xl max-w-3xl mx-auto italic font-medium leading-relaxed border-x border-zinc-100 px-16">
                            Advanced software engineering solutions delivered with precision and modern aesthetic standards.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto grid gap-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group relative bg-zinc-50 border border-zinc-100 rounded-[3rem] p-12 md:p-20 overflow-hidden hover:border-rose-600 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-rose-500/5"
                            >
                                <div className="relative z-10 grid md:grid-cols-[auto,1fr,auto] gap-16 items-start">
                                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-black group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 border border-zinc-100 group-hover:border-rose-600 shadow-sm">
                                        <Icon className="w-10 h-10" />
                                    </div>

                                    <div>
                                        <h3 className="text-4xl font-black text-black mb-6 font-headline italic uppercase tracking-tighter leading-none group-hover:text-rose-600 transition-colors">{service.title}</h3>
                                        <p className="text-zinc-500 leading-relaxed mb-10 text-xl italic font-medium">
                                            {service.description}
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            {["High Performance", "Scalable Architecture", "Modern Design", "Secure Code"].map((feature, i) => (
                                                <div key={i} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 group-hover:text-black transition-colors italic">
                                                    <div className="w-8 h-8 rounded-full bg-rose-500/5 flex items-center justify-center text-rose-600 border border-rose-500/10">
                                                        <Check className="w-4 h-4" />
                                                    </div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6 w-full md:w-auto">
                                        <Link
                                            href="#contact"
                                            className="px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-3 hover:bg-rose-600 transition-all shadow-xl font-headline italic"
                                        >
                                            Initiate <ArrowRight className="w-5 h-5" />
                                        </Link>
                                        <div className="text-center text-zinc-300 text-[10px] font-black uppercase tracking-[0.3em] italic">
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
