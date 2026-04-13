"use client";

import { Project } from "@/data/projects";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MouseEvent } from "react";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const imageSource = project.gallery?.[0]?.src || project.images?.[0] || '';

    // Mouse tracking for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="group relative flex flex-col h-full rounded-[2.5rem] bg-white border border-zinc-100 overflow-hidden hover:border-rose-600 hover:shadow-2xl hover:shadow-rose-500/10 active:scale-[0.98] transition-all duration-500"
        >
            {/* Spotlight Effect (Rose Optimized) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(225, 29, 72, 0.05),
                          transparent 80%
                        )
                    `,
                }}
            />

            {/* Image Container */}
            <div className="relative aspect-[16/11] overflow-hidden m-3 rounded-[1.8rem] border border-zinc-50 shadow-inner">
                {imageSource ? (
                    <Image
                        src={imageSource}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 bg-zinc-50 flex items-center justify-center">
                        <span className="text-4xl font-black text-black/5 font-headline">{project.title.charAt(0)}</span>
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />

                {/* Floating Tech Stack */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-10">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-5 py-2 text-[8px] font-black uppercase tracking-[0.2em] text-black bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-10 relative">
                <div className="mb-10">
                    <h3 className="text-3xl font-black italic uppercase tracking-tighter text-black mb-4 group-hover:text-rose-600 transition-colors font-headline leading-[0.85]">
                        {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 italic font-medium">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="mt-auto pt-8 border-t border-zinc-50 flex items-center justify-between">
                    <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-4 px-10 py-4 rounded-full bg-black text-white font-black uppercase tracking-[0.3em] text-[9px] hover:bg-rose-600 transition-all shadow-xl shadow-zinc-200 font-headline italic"
                    >
                        Explore Details
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
