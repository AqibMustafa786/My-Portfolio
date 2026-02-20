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
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements - Optimized for Mobile */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-[10%] w-60 h-60 lg:w-72 lg:h-72 bg-purple-500/20 rounded-full blur-[60px] lg:blur-[100px]" />
                <div className="absolute bottom-20 left-[10%] w-60 h-60 lg:w-72 lg:h-72 bg-blue-500/20 rounded-full blur-[60px] lg:blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    {greeting && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-purple-400 font-medium mb-4"
                        >
                            {greeting}
                        </motion.p>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Aqib Mustafa
                    </h1>

                    <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-300">
                        <span className="text-purple-400">Flutter Developer</span> & <span className="text-blue-400">Full Stack Web</span> Developer
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                        Architecting enterprise-grade digital solutions. Specializing in high-performance SaaS platforms, scalable cloud-native architectures, and cross-platform mobile ecosystems (Flutter) for forward-thinking organizations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link // Use Link instead of 'a' for client-side navigation if possible, but 'a' is fine for sections.
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                        >
                            View Work <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-white/20 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                        >
                            Download CV <Download className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-[500px] h-[500px] mx-auto">
                        {/* Abstract tech shapes or 3D placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full animate-pulse blur-3xl" />
                        <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-12 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                        {/* You could add a profile image here if available, for now using abstract shapes */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-9xl font-bold text-white/5">DEV</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
