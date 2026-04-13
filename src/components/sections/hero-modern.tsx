"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation

interface HeroModernProps {
    greeting?: string;
}

export const HeroModern = ({ greeting }: HeroModernProps) => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 bg-white">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center lg:text-left py-12"
                >
                    {greeting && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-rose-600 font-black tracking-[0.5em] uppercase text-[9px] mb-6 italic block"
                        >
                            {greeting}
                        </motion.p>
                    )}

                    <h1 className="text-5xl md:text-[5rem] font-black italic uppercase tracking-tighter leading-[0.8] text-black mb-8 font-headline">
                        Aqib <br /> Mustafa
                        <span className="sr-only"> – Software Engineer & Web App Developer</span>
                    </h1>

                    <h2 className="text-xl lg:text-2xl font-black mb-8 text-black font-headline tracking-tighter uppercase italic leading-none">
                        <span className="text-rose-600">Flutter Developer</span> & Full Stack Web
                    </h2>

                    <p className="text-zinc-500 text-base md:text-lg mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed italic font-medium border-l-[4px] border-zinc-100 pl-8">
                        Crafting high-performance digital experiences through <span className="text-black font-black">advanced software engineering</span> and modern design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                        <Link
                            href="#projects"
                            className="h-14 px-10 bg-black rounded-full font-black uppercase tracking-[0.3em] text-[9px] text-white flex items-center justify-center gap-4 hover:bg-rose-600 transition-all duration-500 shadow-2xl active:scale-95 shadow-zinc-200 font-headline italic"
                        >
                            Explore Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Aqib_Mustafa_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 px-10 border-2 border-black rounded-full font-black uppercase tracking-[0.3em] text-[9px] text-black flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-all duration-500 active:scale-95 font-headline italic"
                        >
                            Download CV <Download className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-[450px] h-[450px] mx-auto">
                        <div className="absolute inset-0 border-[3px] border-zinc-100 rounded-[3.5rem] group-hover:rotate-6 transition-transform duration-1000" />
                        <div className="absolute inset-8 border-[3px] border-rose-600/10 rounded-[3.5rem] -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-[12rem] font-black italic tracking-tighter text-black/[0.04] font-headline select-none">
                                2026
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Side Labels */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 -rotate-90 hidden xl:block">
                <span className="text-[10px] font-black uppercase tracking-[1em] text-zinc-100 italic">Portfolio Architecture</span>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 rotate-90 hidden xl:block">
                <span className="text-[10px] font-black uppercase tracking-[1em] text-zinc-100 italic">Aqib Mustafa Portfolio</span>
            </div>
        </section>
    );
};
