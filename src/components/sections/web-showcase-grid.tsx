"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";

interface WebShowcaseGridProps {
    projects: Project[];
}

export function WebShowcaseGrid({ projects }: WebShowcaseGridProps) {
    if (projects.length === 0) return null;

    const mainProject = projects[0];
    const sideProjects = projects.slice(1, 4);

    return (
        <div className="grid lg:grid-cols-12 gap-8 h-full min-h-[600px] lg:min-h-[900px]">
            {/* Left Side - Large Project */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-8 flex flex-col gap-8"
            >
                {/* Main Image Feature */}
                <Link 
                    href={`/projects/${mainProject.id}`}
                    className="relative group h-[500px] lg:h-full overflow-hidden rounded-[3rem] bg-zinc-50 border border-zinc-100"
                >
                    <Image 
                        src={mainProject.images[0]} 
                        alt={mainProject.title} 
                        fill 
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-700" />
                    
                    {/* Centered Large Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 text-center">
                        <motion.h2 
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-5xl md:text-7xl lg:text-9xl font-black italic uppercase tracking-tighter text-white font-headline leading-[0.8] drop-shadow-2xl select-none"
                        >
                            {mainProject.title.split(' ')[0]} <br />
                            <span className="text-rose-600 not-italic">{mainProject.title.split(' ').slice(1).join(' ')}</span>
                        </motion.h2>
                    </div>

                    {/* Editorial Detail in Corner */}
                    <div className="absolute top-10 left-10 hidden md:block">
                        <span className="text-white/40 text-[9px] font-black uppercase tracking-[0.5em] italic">Project Feature No. 01</span>
                    </div>
                </Link>

                {/* Subtext Area with Large Button */}
                <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-10 group hover:border-rose-600 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-rose-500/5 overflow-hidden relative">
                    <p className="text-zinc-500 transition-colors text-lg md:text-xl font-medium italic max-w-xl leading-relaxed relative z-10">
                        {mainProject.shortDescription} High-performance engineering meets bespoke digital aesthetics for modern enterprise brands.
                    </p>
                    <Link 
                        href={`/projects/${mainProject.id}`}
                        className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-black text-white flex items-center justify-center hover:bg-rose-600 transition-all duration-500 active:scale-90 relative z-10 shadow-xl"
                        aria-label={`View details for ${mainProject.title}`}
                    >
                        <ArrowRight className="w-8 h-8 md:w-12 md:h-12" />
                    </Link>

                    {/* Decorative Background Text */}
                    <div className="absolute right-[-5%] bottom-[-20%] text-[12rem] font-black text-zinc-50/50 font-headline italic tracking-tighter leading-none select-none pointer-events-none uppercase">
                        Case
                    </div>
                </div>
            </motion.div>

            {/* Right Side - Stacked List */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-4 flex flex-col gap-8"
            >
                {sideProjects.map((project, index) => (
                    <Link 
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="relative group h-[300px] lg:h-full lg:flex-grow overflow-hidden rounded-[3rem] bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-2xl transition-all duration-700"
                    >
                        <Image 
                            src={project.images[0]} 
                            alt={project.title} 
                            fill 
                            className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
                        
                        {/* Bottom Tag Label */}
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="bg-white px-8 py-5 rounded-full flex items-center justify-between shadow-2xl transition-all duration-500 group-hover:bg-black group-hover:text-white border border-zinc-100 group-hover:border-black">
                                <span className="text-[10px] font-black uppercase tracking-widest italic leading-none">{project.title}</span>
                                <MoveRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}
