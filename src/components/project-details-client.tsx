"use client";

import { Project } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, CheckCircle, Layers, DollarSign, Clock, Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectDetailsClientProps {
    project: Project;
}

export function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans relative overflow-x-hidden">
            <Navbar />

            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[128px]" />
            </div>

            <main className="pt-32 pb-20 container mx-auto px-4 relative z-10">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
                    >
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="font-medium">Back to Projects</span>
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.techStack.map((tech, index) => (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                                >
                                    <Badge className="bg-white/10 hover:bg-white/20 text-gray-200 px-4 py-1.5 text-sm border border-white/5 transition-colors">
                                        {tech}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
                            {project.shortDescription}
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column: Image & Description */}
                        <motion.div
                            className="lg:col-span-2 space-y-12"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >


                            {/* Featured Image */}
                            {/* Featured Image */}
                            {(project.gallery?.[0] || project.images?.[0]) && (
                                project.gallery?.[0]?.type === 'mobile' ? (
                                    <div className="relative mx-auto border-[12px] border-gray-900 rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[15px] top-[72px] rounded-l-lg border-r border-gray-700"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[124px] rounded-l-lg border-r border-gray-700"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[178px] rounded-l-lg border-r border-gray-700"></div>
                                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[15px] top-[142px] rounded-r-lg border-l border-gray-700"></div>
                                        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative z-10">
                                            <Image
                                                src={project.gallery?.[0]?.src || project.images?.[0] || ''}
                                                alt={`${project.title} featured image`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/10 group bg-gray-900/50 backdrop-blur-sm aspect-video">
                                        <Image
                                            src={project.gallery?.[0]?.src || project.images?.[0] || ''}
                                            alt={`${project.title} featured image`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                )
                            )}

                            {/* Full Description */}
                            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-purple-500 rounded-full" />
                                    About the Project
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Details & CTA */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {/* Project Overview (Price, Duration, Industries) */}
                            {(project.price || project.duration || project.industries) && (
                                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                                    <h2 className="text-xl font-bold mb-6 text-white">Project Overview</h2>
                                    <div className="space-y-4">
                                        {project.price && (
                                            <div className="flex items-center gap-4 text-gray-300">
                                                <div className="p-2.5 rounded-xl bg-green-500/10 text-green-400">
                                                    <DollarSign className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-400">Budget</div>
                                                    <div className="font-semibold text-white">{project.price}</div>
                                                </div>
                                            </div>
                                        )}
                                        {project.duration && (
                                            <div className="flex items-center gap-4 text-gray-300">
                                                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-400">Duration</div>
                                                    <div className="font-semibold text-white">{project.duration}</div>
                                                </div>
                                            </div>
                                        )}
                                        {project.industries && (
                                            <div className="flex items-start gap-4 text-gray-300">
                                                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 mt-1">
                                                    <Building2 className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-400 mb-1">Industries</div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.industries.map((industry, i) => (
                                                            <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200">
                                                                {industry}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* Key Features */}
                            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                                <h2 className="text-xl font-bold mb-6 text-white">Key Features</h2>
                                <ul className="space-y-4">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-400">
                                            <CheckCircle className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                            <span className="text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Links Card */}
                            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-3xl p-8 border border-white/10 backdrop-blur-md">
                                <h2 className="text-xl font-bold mb-6 text-white">Project Links</h2>
                                <div className="space-y-3">
                                    {project.liveLink ? (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-[1.02] transition-all group border border-white/5"
                                        >
                                            <span className="font-medium text-white">Live Demo</span>
                                            <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                                        </a>
                                    ) : (
                                        <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-gray-500 text-sm flex items-center justify-between cursor-not-allowed">
                                            <span>Live Demo Unavailable</span>
                                            <ExternalLink className="w-4 h-4 opacity-50" />
                                        </div>
                                    )}

                                    {project.githubLink ? (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-[1.02] transition-all group border border-white/5"
                                        >
                                            <span className="font-medium text-white">Source Code</span>
                                            <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                                        </a>
                                    ) : (
                                        <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-gray-500 text-sm flex items-center justify-between cursor-not-allowed">
                                            <span>Repo Private</span>
                                            <Github className="w-4 h-4 opacity-50" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl p-8 border border-green-500/20 backdrop-blur-md">
                                <h3 className="font-bold text-lg mb-2 text-white">Like what you see?</h3>
                                <p className="text-gray-400 text-sm mb-6">
                                    I can build something similar for you. Let's discuss your custom requirements!
                                </p>
                                <a
                                    href={project.techStack.includes("AppSheet")
                                        ? "https://www.fiverr.com/aqib_surahio/create-full-stack-appsheet-applications"
                                        : (project.techStack.includes("Flutter") || project.techStack.includes("Dart")
                                            ? "https://www.fiverr.com/aqib_surahio/develop-premium-cross-platform-flutter-mobile-app-for-ios-and-android"
                                            : "https://www.fiverr.com/aqibmustafa")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white text-center rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25"
                                >
                                    Hire Me on Fiverr
                                </a>
                            </div>

                        </motion.div>
                    </div>

                    {/* Full Width Gallery Section */}
                    <div className="mt-20 space-y-16">
                        {project.gallery ? (
                            <>
                                {/* Mobile Screens */}
                                {project.gallery.some(img => img.type === 'mobile') && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-8 text-white border-l-4 border-purple-500 pl-4">Mobile Interface</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                            {project.gallery.filter(img => img.type === 'mobile').map((img, index) => (
                                                <div
                                                    key={index}
                                                    className="relative rounded-3xl overflow-hidden border border-white/10 shadow-xl shadow-purple-900/10 group bg-gray-900/50 backdrop-blur-sm aspect-[9/19]"
                                                >
                                                    <Image
                                                        src={img.src}
                                                        alt={`${project.title} mobile screen ${index + 1}`}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Desktop Screens */}
                                {project.gallery.some(img => img.type === 'desktop') && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <h3 className="text-2xl font-bold mb-8 text-white border-l-4 border-blue-500 pl-4">Web Dashboard</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {project.gallery.filter(img => img.type === 'desktop').map((img, index) => (
                                                <div
                                                    key={index}
                                                    className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/10 group bg-gray-900/50 backdrop-blur-sm w-full aspect-video"
                                                >
                                                    <Image
                                                        src={img.src}
                                                        alt={`${project.title} dashboard screen ${index + 1}`}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </>
                        ) : (
                            // Fallback for older projects
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {project.images && project.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/10 group bg-gray-900/50 backdrop-blur-sm ${index === 0 ? 'md:col-span-2' : ''}`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            width={1200}
                                            height={800}
                                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
