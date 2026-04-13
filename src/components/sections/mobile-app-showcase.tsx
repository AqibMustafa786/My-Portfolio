"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

interface MobileAppShowcaseProps {
    projects: Project[];
}

export function MobileAppShowcase({ projects }: MobileAppShowcaseProps) {
    // We take the first project as the "hero" and the rest as the grid
    const heroProject = projects[0];
    const gridProjects = projects.slice(1, 7); // Up to 6 projects for the right grid

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                {/* Section Header with Design Reference Style */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
                    <div className="flex items-center gap-8 bg-zinc-50 border border-zinc-200 rounded-full px-12 py-4 w-fit overflow-hidden">
                        {["COLLECTION", "UTILITIES", "ECOMMERCE", "FINTECH"].map((item) => (
                            <span key={item} className="text-[10px] font-black tracking-widest text-zinc-400 hover:text-black cursor-pointer transition-colors">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="Search mobile experiences..." 
                            className="bg-zinc-50 border border-zinc-200 rounded-full py-4 px-12 pl-14 text-sm focus:outline-none focus:border-rose-600 transition-all w-[300px]"
                        />
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-hover:text-rose-600 transition-colors" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-0 border border-zinc-900 overflow-hidden rounded-[2rem]">
                    {/* Left Column: Title & Feature */}
                    <div className="lg:col-span-6 flex flex-col bg-white border-r border-zinc-900">
                        {/* Title Box */}
                        <div className="p-10 md:p-16 border-b border-zinc-900 flex flex-col justify-between min-h-[400px]">
                            <div className="flex justify-between items-start">
                                <motion.h2 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="text-7xl md:text-[8rem] font-black italic uppercase leading-[0.8] tracking-tighter text-zinc-900 font-headline"
                                >
                                    MOBILE <br /> <span className="text-zinc-400">EXP.</span>
                                </motion.h2>
                                <div className="text-right">
                                    <span className="text-[11px] font-black uppercase tracking-widest block italic">Latest Collection</span>
                                    <span className="text-4xl font-black italic text-zinc-300">2026</span>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-col gap-8">
                                <p className="text-zinc-500 font-medium italic text-lg max-w-sm leading-relaxed">
                                    Experience the next generation of mobile engineering. High-performance, pixel-perfect, and user-centric.
                                </p>
                                <Link 
                                    href={`/projects/${heroProject?.id}`}
                                    className="border border-zinc-900 rounded-full px-12 py-5 w-fit text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all transform hover:scale-105 active:scale-95 italic"
                                >
                                    Explore Now
                                </Link>
                            </div>
                        </div>

                        {/* Large Horizontal Feature Box */}
                        <div className="relative flex-grow min-h-[400px] group overflow-hidden">
                            <Image 
                                src={heroProject?.images[0] || ""} 
                                alt={heroProject?.title || ""} 
                                fill 
                                className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
                            <div className="absolute inset-0 border border-zinc-900 pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Column: 2x3 Product Grid */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3">
                        {gridProjects.map((project, index) => (
                            <Link 
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className="relative aspect-[9/16] group border-b border-r border-zinc-900 last:border-r-0 overflow-hidden bg-zinc-50"
                            >
                                <Image 
                                    src={project.gallery?.find(img => img.type === "mobile")?.src || project.images[0]} 
                                    alt={project.title} 
                                    fill 
                                    className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-md border-t border-zinc-900">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest italic truncate">{project.title}</h4>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-900 italic opacity-0 group-hover:opacity-100 transition-opacity">
                                        {project.techStack[0]}
                                    </span>
                                </div>
                                {/* Price-style Tag */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="bg-zinc-900 text-white text-[9px] font-black px-4 py-2 rounded-lg italic shadow-2xl transform group-hover:scale-110 transition-transform">
                                        VIEW.PRJ
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
