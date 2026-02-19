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
            className="group relative flex flex-col h-full rounded-[2rem] bg-gray-900/40 border border-white/10 overflow-hidden hover:border-purple-500/50 active:scale-[0.98] transition-all duration-300"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          650px circle at ${mouseX}px ${mouseY}px,
                          rgba(168, 85, 247, 0.15),
                          transparent 80%
                        )
                    `,
                }}
            />

            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden m-2 rounded-[1.5rem] border border-white/5">
                {imageSource ? (
                    <Image
                        src={imageSource}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white/10">{project.title.charAt(0)}</span>
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

                {/* Floating Tech Stack */}
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 relative">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex -space-x-2">
                        {/* Placeholder for potential team avatars or status icons if needed later */}
                    </div>

                    <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 font-semibold text-sm hover:bg-purple-50 transition-all transform group-hover:translate-x-1"
                    >
                        View Project
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};
