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
            className="group relative flex flex-col h-full rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl active:scale-[0.98] transition-all duration-300"
        >
            {/* Subtle spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          500px circle at ${mouseX}px ${mouseY}px,
                          rgba(244, 114, 84, 0.07),
                          transparent 80%
                        )
                    `,
                }}
            />

            {/* Image */}
            <div className="relative aspect-[16/11] overflow-hidden m-3 rounded-xl border border-border">
                {imageSource ? (
                    <Image
                        src={imageSource}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                        <span className="text-4xl font-bold text-muted-foreground/20">{project.title.charAt(0)}</span>
                    </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Floating Tech Stack */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium text-foreground bg-background/90 backdrop-blur-md rounded-full shadow-lg">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 relative">
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="mt-auto pt-5 border-t border-border flex items-center gap-3">
                    <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-xs hover:opacity-90 transition-all shadow-md shadow-primary/20"
                    >
                        Details
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-foreground font-medium text-xs hover:border-primary hover:text-primary transition-all"
                        >
                            Live Demo
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
