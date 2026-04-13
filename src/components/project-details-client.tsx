"use client";

import { Project } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, CheckCircle, Layers, DollarSign, Clock, Building2, Maximize2, Zap, ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ProjectDetailsClientProps {
    project: Project;
}

export function ProjectDetailsClient({ project }: ProjectDetailsClientProps) {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const centerImg = project.gallery?.find(img => img.type === "desktop") || project.gallery?.[0];
    
    // Lightbox Logic
    const allGalleryImages = project.gallery || [];
    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % allGalleryImages.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isGalleryOpen) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") setIsGalleryOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isGalleryOpen, allGalleryImages.length]);

    return (
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans relative overflow-x-hidden">
            <Navbar />

            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10">
                {/* Clean Back Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto mb-24"
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-4 text-zinc-400 hover:text-black transition-all group"
                    >
                        <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-xl">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] italic leading-none">Exit to Portfolio</span>
                    </Link>
                </motion.div>

                {/* DYNAMIC SHOWCASE GRID */}
                <div className="max-w-[1600px] mx-auto mb-16 lg:mb-24 overflow-hidden px-4 md:px-6">
                    {project.category === "Mobile App" ? (
                        /* FASHION EDITORIAL LAYOUT FOR MOBILE */
                        <div className="grid lg:grid-cols-12 gap-0 border border-zinc-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
                            {/* Left Side (6 Cols) */}
                            <div className="lg:col-span-6 flex flex-col lg:border-r border-zinc-900">
                                {/* Title Block */}
                                <div className="p-6 md:p-12 lg:p-16 border-b border-zinc-900 bg-white min-h-[300px] lg:min-h-[350px] flex flex-col justify-between">
                                    <div className="flex justify-between items-start gap-4">
                                        <motion.h1 
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black italic uppercase leading-[0.85] lg:leading-[0.8] tracking-tighter text-black font-headline break-normal text-balance max-w-full overflow-hidden"
                                        >
                                            {project.title.split(' ')[0]} <br />
                                            <span className="text-zinc-300">{project.title.split(' ').slice(1).join(' ')}</span>
                                        </motion.h1>
                                        <div className="text-right hidden sm:block">
                                            <span className="text-[9px] font-black uppercase tracking-widest block italic">Engineering Exp.</span>
                                            <span className="text-3xl lg:text-4xl font-black italic text-zinc-100">2026</span>
                                        </div>
                                    </div>
                                    <p className="text-zinc-500 font-medium italic text-sm md:text-lg max-w-sm mt-8">
                                        "{project.shortDescription}" High-performance mobile architecture integrated with bespoke digital aesthetics.
                                    </p>
                                </div>
                                {/* Feature Image Block */}
                                <div className="relative flex-grow h-[350px] md:h-[450px] lg:min-h-[400px] bg-zinc-50 p-6 md:p-12 flex items-center justify-center group overflow-hidden border-b lg:border-b-0 border-zinc-900">
                                    <Image 
                                        src={project.gallery?.find(img => img.type === "mobile")?.src || project.images[0]} 
                                        alt={project.title} 
                                        fill 
                                        className="object-contain p-4 md:p-8 transition-transform duration-[3s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex justify-end">
                                        <button 
                                            onClick={() => setIsGalleryOpen(true)} 
                                            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center hover:bg-rose-600 transition-all shadow-2xl"
                                            aria-label="Expand Gallery"
                                            title="Expand Gallery"
                                        >
                                            <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side (6 Cols) - 2x3 Grid */}
                            <div className="lg:col-span-6 grid grid-cols-2 lg:grid-cols-3">
                                {project.gallery?.filter(img => img.type === "mobile").slice(0, 6).map((img, index) => (
                                    <div key={index} className="relative aspect-[9/16] border-b border-r border-zinc-900 last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0 bg-zinc-50 p-4 md:p-6 flex items-center justify-center group overflow-hidden">
                                        <Image 
                                            src={img.src} 
                                            alt={`mobile-screen-${index}`} 
                                            fill 
                                            className="object-contain p-2 md:p-4 transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-md border-t border-zinc-900">
                                            <span className="text-[7px] md:text-[8px] font-black uppercase tracking-widest italic">{img.type} Screen .0{index + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* REFINED COMPACT EDITORIAL GRID FOR WEB */
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                            {/* Left Column: Title & Narrative */}
                            <div className="lg:col-span-4 flex flex-col justify-between py-4 text-center lg:text-left">
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="mb-8"
                                    >
                                        <span className="text-rose-600 font-black tracking-[0.4em] uppercase text-[9px] mb-4 block italic">Case Study .2026</span>
                                        <h1 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black italic uppercase tracking-tighter leading-[0.8] text-black font-headline mb-8 break-normal text-balance">
                                            {project.title.split(' ')[0]} <br />
                                            <span className="text-zinc-300 not-italic">{project.title.split(' ').slice(1).join(' ')}</span>
                                        </h1>
                                        <p className="text-zinc-500 text-base md:text-lg font-medium italic leading-relaxed border-l-0 lg:border-l-2 border-zinc-100 px-4 lg:pl-8 lg:px-0">
                                            "{project.shortDescription}"
                                        </p>
                                    </motion.div>
                                </div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-8 lg:mt-16 flex justify-center lg:justify-start"
                                >
                                    <button 
                                        onClick={() => setIsGalleryOpen(true)}
                                        className="group flex items-center gap-4 text-black hover:text-rose-600 transition-all"
                                        aria-label="Expand Full Vision"
                                        title="Expand Full Vision"
                                    >
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-zinc-900 flex items-center justify-center group-hover:bg-rose-600 group-hover:border-rose-600 group-hover:text-white transition-all shadow-xl">
                                            <Maximize2 className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest italic leading-none">Expand Full Vision</span>
                                    </button>
                                </motion.div>
                            </div>

                            {/* Middle Column: Main Feature (Contained) */}
                            <div className="lg:col-span-5 h-[350px] md:h-[500px] lg:h-[600px]">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative w-full h-full bg-zinc-50 rounded-[2rem] md:rounded-[3rem] border border-zinc-100 overflow-hidden group shadow-2xl flex items-center justify-center p-4 md:p-8"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project.category === "Mobile App" ? (project.gallery?.find(img => img.type === "mobile")?.src || project.images[0]) : (centerImg?.src || project.images[0])}
                                            alt={project.title}
                                            fill
                                            className="object-contain transition-transform duration-[2.5s] group-hover:scale-105"
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column: Side Grid (Contained) */}
                            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 md:gap-8 h-[200px] md:h-[300px] lg:h-full">
                                {project.gallery?.slice(1, 3).map((img, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
                                        className="relative flex-1 lg:h-full lg:max-h-[285px] bg-zinc-50 border border-zinc-100 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group p-4 md:p-6 flex items-center justify-center shadow-sm hover:shadow-xl transition-all"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={img.src}
                                                alt={`gallery-${index}`}
                                                fill
                                                className="object-contain transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                    <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
                        <DialogContent className="max-w-[100vw] h-[100vh] bg-white border-none p-0 overflow-hidden flex flex-col md:flex-row shadow-2xl">
                            <DialogTitle className="sr-only">Showcase: {project.title}</DialogTitle>
                            <DialogDescription className="sr-only">Interactive immersive gallery for {project.title}</DialogDescription>
                            
                            <div className="flex-1 relative bg-zinc-50 flex items-center justify-center p-12 md:p-24 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                        key={currentImageIndex}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full h-full flex items-center justify-center"
                                    >
                                        <Image src={allGalleryImages[currentImageIndex]?.src} alt="gallery" width={1920} height={1080} className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]" priority />
                                    </motion.div>
                                </AnimatePresence>

                                <button onClick={prevImage} className="absolute left-10 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-zinc-100 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all bg-white/90 backdrop-blur-xl z-50 shadow-2xl" aria-label="Previous" title="Previous Image"><ChevronLeft className="w-8 h-8" /></button>
                                <button onClick={nextImage} className="absolute right-10 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-zinc-100 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all bg-white/90 backdrop-blur-xl z-50 shadow-2xl" aria-label="Next" title="Next Image"><ChevronRight className="w-8 h-8" /></button>
                                
                                <div className="absolute bottom-10 flex gap-4 overflow-x-auto max-w-[90%] px-8 scrollbar-hide py-4 border border-zinc-100 bg-white/90 backdrop-blur-2xl rounded-[2rem] z-50 shadow-2xl">
                                    {allGalleryImages.map((img, i) => (
                                        <button key={i} onClick={() => setCurrentImageIndex(i)} className={`relative flex-shrink-0 w-16 h-20 rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === i ? 'border-rose-600 scale-110' : 'border-transparent opacity-30 hover:opacity-100'}`} aria-label={`View Image ${i + 1}`} title={`View Image ${i + 1}`}>
                                            <Image src={img.src} alt="thumbnail" fill className="object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full md:w-[420px] bg-white p-6 md:p-12 border-l border-zinc-100 overflow-y-auto scrollbar-hide relative pt-24 md:pt-12">
                                <button 
                                    onClick={() => setIsGalleryOpen(false)}
                                    className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-rose-600 transition-all z-50 shadow-2xl"
                                    aria-label="Close Gallery"
                                    title="Close Gallery"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-4xl font-black text-black tracking-tight mb-4 font-headline italic uppercase leading-tight break-normal text-balance">{project.title}</h2>
                                    <p className="text-zinc-400 leading-relaxed italic font-medium text-sm md:text-base">{project.shortDescription}</p>
                                </div>

                                <div className="space-y-20">
                                    <section>
                                        <label className="text-[10px] font-black tracking-[0.4em] uppercase text-black mb-10 block italic border-b border-zinc-50 pb-4">Project Intelligence</label>
                                        <p className="text-zinc-600 leading-relaxed text-lg italic">{project.fullDescription}</p>
                                    </section>

                                    <section>
                                        <label className="text-[10px] font-black tracking-[0.4em] uppercase text-black mb-10 block italic border-b border-zinc-50 pb-4">Engineering Stack</label>
                                        <div className="flex flex-wrap gap-3">
                                            {project.techStack.map(t => <span key={t} className="px-6 py-2.5 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] font-black text-zinc-500 uppercase tracking-widest">{t}</span>)}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                {/* Refined Content Architecture */}
                <div className="max-w-7xl mx-auto mt-48 px-6 lg:px-12">
                    {/* Top Row: Narrative & Constraints */}
                    <div className="grid lg:grid-cols-2 gap-24 mb-32 items-start">
                        <section className="bg-white border border-zinc-50 rounded-[3rem] p-12 lg:p-16 h-full shadow-sm hover:shadow-xl transition-all">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-12 h-[2px] bg-rose-600" />
                                <h2 className="text-3xl font-black italic uppercase tracking-tighter text-black font-headline leading-none">Intelligence</h2>
                            </div>
                            <div className="text-xl text-zinc-600 font-medium leading-[1.7] tracking-tight italic">
                                <p className="border-l-4 border-zinc-100 pl-10 py-2">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </section>

                        <section className="bg-white border border-zinc-50 rounded-[3rem] p-12 lg:p-16 h-full shadow-sm hover:shadow-xl transition-all">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300 mb-12 italic">Project Intelligence</h3>
                            <div className="space-y-12">
                                <div className="flex flex-col gap-10">
                                    <div className="flex items-center gap-6">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-100">
                                            <Layers className="w-5 h-5 text-rose-600" />
                                        </div>
                                        <p className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em] italic leading-none">Engineering Architecture</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map(t => (
                                            <span key={t} className="px-5 py-2.5 bg-zinc-50 border border-zinc-100 rounded-full text-[9px] font-black text-black uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all italic">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-10 border-t border-zinc-50 space-y-10">
                                    {project.duration && (
                                        <div className="flex items-center gap-8 group">
                                            <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-500 shadow-xl">
                                                <Clock className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.2em] mb-1 italic">Development Cycle</p>
                                                <p className="text-xl font-black text-black font-headline tracking-tighter italic">{project.duration}</p>
                                            </div>
                                        </div>
                                    )}
                                    {project.industries && (
                                        <div className="flex items-start gap-8 group">
                                            <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-xl">
                                                <Building2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] text-zinc-400 uppercase font-black tracking-[0.2em] mb-4 italic">Target Verticals</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.industries?.map(ind => (
                                                        <span key={ind} className="px-4 py-2 bg-white border border-zinc-100 rounded-full text-[9px] font-black text-zinc-500 uppercase tracking-widest hover:text-black hover:border-black transition-all italic">{ind}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Bottom Row: Solutions & CTA */}
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        <section className="bg-zinc-50/50 border border-zinc-100 rounded-[3.5rem] p-12 lg:p-16">
                            <div className="flex items-center gap-6 mb-16">
                                <div className="w-12 h-[2px] bg-black" />
                                <h2 className="text-3xl font-black italic uppercase tracking-tighter text-black font-headline leading-none">Solutions</h2>
                            </div>
                            <div className="grid md:grid-cols-1 gap-10">
                                {project.features.map((feature, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group relative"
                                    >
                                        <div className="relative flex items-center gap-10">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-zinc-100 group-hover:border-rose-600 group-hover:bg-rose-50 transition-all duration-500 shadow-sm">
                                                <CheckCircle className="w-5 h-5 text-rose-600" />
                                            </div>
                                            <p className="text-zinc-500 text-lg leading-tight group-hover:text-black transition-colors italic font-medium">
                                                {feature}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <div className="h-full">
                            <div className="relative group h-full">
                                <div className="relative bg-zinc-950 rounded-[3.5rem] p-16 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.01] h-full flex flex-col justify-center">
                                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-rose-600/10 rounded-full blur-[100px]" />
                                    
                                    <h3 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-10 leading-[0.8] font-headline">
                                        Ready to scale <br /> your next idea?
                                    </h3>
                                    <p className="text-zinc-400 text-lg mb-16 leading-relaxed italic font-medium max-w-sm">
                                        Available for high-impact {project.category.toLowerCase()} engineering and consultation.
                                    </p>
                                    <a 
                                        href="https://www.fiverr.com/aqibmustafa" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-10 bg-white text-black text-center font-black uppercase tracking-[0.4em] text-[10px] rounded-[2rem] hover:bg-rose-600 hover:text-white transition-all shadow-2xl font-headline italic"
                                    >
                                        Initiate Collaboration
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
