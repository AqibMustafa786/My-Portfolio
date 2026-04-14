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

            <main className="pt-32 md:pt-40 pb-40 container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
                {/* 1. BACK NAVIGATION */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 md:mb-20"
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-4 text-zinc-400 hover:text-black transition-all group"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                            <ArrowLeft className="w-4 h-4 md:w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] italic leading-none">Exit to Portfolio</span>
                    </Link>
                </motion.div>

                {/* 2. IMMERSIVE HERO SECTION */}
                <section className="mb-24 md:mb-32 relative">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="flex items-center gap-3 text-rose-600 font-black tracking-[0.5em] uppercase text-[9px] md:text-[10px] mb-6 italic">
                                    <div className="w-8 h-[2px] bg-rose-600" /> Case Study: Technical Architecture
                                </span>
                                <h1 className="text-[12vw] sm:text-[10vw] md:text-8xl xl:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] text-black font-headline mb-8 text-balance">
                                    {project.title.split(' ')[0]} <br />
                                    <span className="text-zinc-100 not-italic select-none stroke-black" style={{ WebkitTextStroke: '1px #000' }}>{project.title.split(' ').slice(1).join(' ')}</span>
                                </h1>
                                <p className="text-zinc-400 text-lg md:text-2xl font-medium italic leading-relaxed max-w-2xl border-l-4 border-zinc-50 pl-8">
                                    "{project.shortDescription}"
                                </p>
                            </motion.div>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="hidden lg:flex flex-col items-end gap-4 text-right"
                        >
                            <span className="text-[9px] font-black uppercase tracking-widest block italic text-zinc-300 underline underline-offset-8 decoration-rose-600/30">Engineering Lifecycle</span>
                            <span className="text-6xl font-black italic text-zinc-50 leading-none">2026_V1</span>
                        </motion.div>
                    </div>

                    {/* 3. GLASSMORPHIC SPECS BAR */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/80 backdrop-blur-3xl border border-zinc-100 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-wrap items-center justify-between gap-8 md:gap-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center"><Zap className="w-5 h-5 md:w-6 md:h-6 text-rose-500" /></div>
                            <div>
                                <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase font-black tracking-widest mb-1 italic">Classification</p>
                                <p className="text-sm md:text-base font-black italic uppercase tracking-widest">{project.category}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center"><Clock className="w-5 h-5 md:w-6 md:h-6 text-zinc-400" /></div>
                            <div>
                                <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase font-black tracking-widest mb-1 italic">Duration</p>
                                <p className="text-sm md:text-base font-black italic uppercase tracking-widest">{project.duration || "Production Grade"}</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center"><Building2 className="w-5 h-5 md:w-6 md:h-6 text-zinc-400" /></div>
                            <div>
                                <p className="text-[8px] md:text-[9px] text-zinc-400 uppercase font-black tracking-widest mb-1 italic">Sector</p>
                                <p className="text-sm md:text-base font-black italic uppercase tracking-widest">{project.industries?.[0] || "Global Market"}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsGalleryOpen(true)}
                            className="ml-auto flex items-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-black text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 transition-all shadow-xl font-headline italic"
                        >
                            <Maximize2 className="w-4 h-4" /> Full Gallery
                        </button>
                    </motion.div>
                </section>

                {/* 4. PREMIUM BENTO GRID GALLERY */}
                <section className="mb-32 md:mb-48">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 h-auto md:h-[1000px] lg:h-[1200px]">
                        {/* Main Spotlight (7 Cols) */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 relative bg-zinc-50 rounded-[2.5rem] md:rounded-[4rem] border border-zinc-100 overflow-hidden group shadow-2xl p-6 md:p-18 flex items-center justify-center h-[400px] md:h-full"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={project.gallery?.find(img => img.type === "desktop")?.src || project.images[0]}
                                    alt="Main Desktop View"
                                    fill
                                    className="object-contain transition-transform duration-[3s] group-hover:scale-105"
                                    priority
                                />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex justify-between items-end bg-gradient-to-t from-white/40 via-transparent text-black pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                <div>
                                    <span className="text-[10px] font-black tracking-widest uppercase italic block mb-2 opacity-60">System Core View</span>
                                    <span className="text-2xl font-black italic uppercase tracking-tighter font-headline">Desktop Interface</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Side Pillar (4 Cols) */}
                        <div className="md:col-span-4 grid grid-rows-2 gap-6 md:gap-8 h-[600px] md:h-full">
                            {/* Mobile Double Stack or Single Large */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative bg-zinc-950 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group shadow-2xl p-8 flex items-center justify-center h-full"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
                                <div className="relative w-full h-[85%]">
                                    <Image
                                        src={project.gallery?.find(img => img.type === "mobile")?.src || project.images[0]}
                                        alt="Mobile View"
                                        fill
                                        className="object-contain transition-all duration-[2s] group-hover:scale-110 group-hover:rotate-2"
                                    />
                                </div>
                                <div className="absolute top-6 right-8 text-white/50 text-[9px] font-black uppercase tracking-[0.3em] vertical-rl italic rotate-180">Mobile Ecosystem</div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="relative bg-[#F9F9FB] rounded-[2.5rem] md:rounded-[4rem] border border-zinc-100 overflow-hidden group shadow-xl p-8 flex items-center justify-center h-full"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={project.gallery?.filter(img => img.type === "desktop")[1]?.src || project.gallery?.[1]?.src || project.images[0]}
                                        alt="Auxiliary View"
                                        fill
                                        className="object-contain transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Row Highlights (Optional, showing more if available) */}
                        {project.gallery && project.gallery.length > 3 && (
                            <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-4">
                                {project.gallery.slice(3, 7).map((img, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 * i }}
                                        className="relative aspect-video bg-zinc-50 border border-zinc-100 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group flex items-center justify-center p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all cursor-pointer"
                                        onClick={() => { setCurrentImageIndex(allGalleryImages.indexOf(img)); setIsGalleryOpen(true); }}
                                    >
                                        <div className="relative w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                                            <Image src={img.src} alt={`detail-${i}`} fill className="object-contain group-hover:scale-110 transition-transform duration-1000" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* 5. CONTENT ARCHITECTURE (Narrative & Intelligence) */}
                <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-start relative">
                    <div className="lg:col-span-8">
                        <section className="mb-24 md:mb-32">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-12 h-[2px] bg-rose-600" />
                                <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-black font-headline leading-none">Intelligence Brief</h2>
                            </div>
                            <div className="text-xl md:text-3xl text-zinc-600 font-medium leading-[1.6] tracking-tight italic border-l-8 border-zinc-50 pl-10 md:pl-16 py-4">
                                <p className="mb-10 text-balance">
                                    {project.fullDescription}
                                </p>
                            </div>
                        </section>

                        <section className="mb-24 md:mb-32">
                            <div className="bg-zinc-50/50 border border-zinc-100 rounded-[3rem] md:rounded-[4rem] p-8 md:p-20">
                                <div className="flex items-center gap-6 mb-16">
                                    <div className="w-12 h-[2px] bg-black" />
                                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-black font-headline leading-none">Core Solutions</h2>
                                </div>
                                <div className="grid gap-12">
                                    {project.features.map((feature, i) => (
                                        <motion.div 
                                            key={i} 
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="group flex items-start gap-8"
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white flex items-center justify-center border border-zinc-100 group-hover:border-rose-600 group-hover:bg-rose-50 transition-all duration-500 shadow-sm mt-1">
                                                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-rose-600" />
                                            </div>
                                            <div>
                                                <p className="text-lg md:text-2xl text-zinc-500 italic font-medium leading-snug group-hover:text-black transition-colors">
                                                    {feature}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 lg:sticky lg:top-40 space-y-12">
                        <section className="bg-white border border-zinc-100 rounded-[2.5rem] p-10 shadow-xl">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 mb-10 block italic border-b border-zinc-50 pb-4">Technology Stack</label>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {project.techStack.map(t => (
                                    <span key={t} className="px-5 py-3 bg-zinc-50 border border-zinc-100 rounded-full text-[9px] md:text-[10px] font-black text-black uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all italic shadow-sm">{t}</span>
                                ))}
                            </div>
                        </section>

                        <section className="bg-zinc-950 rounded-[2.5rem] p-12 overflow-hidden shadow-2xl relative group">
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-rose-600/20 rounded-full blur-[60px]" />
                            <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-8 leading-[0.9] font-headline">Ready to <br /> innovate?</h3>
                            <p className="text-zinc-400 text-sm mb-12 italic font-medium leading-relaxed">Let's build high-impact technical ecosystems together.</p>
                            <a 
                                href="https://www.fiverr.com/aqibmustafa" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 hover:text-white transition-all shadow-xl font-headline italic w-full justify-center"
                            >
                                Initiate Launch <ArrowRight className="w-4 h-4" />
                            </a>
                        </section>
                    </div>
                </div>
            </main>

            <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
                <DialogContent className="max-w-[100vw] h-[100vh] bg-white border-none p-0 overflow-hidden flex flex-col md:flex-row shadow-2xl">
                    <DialogTitle className="sr-only">Showcase: {project.title}</DialogTitle>
                    <DialogDescription className="sr-only">Interactive immersive gallery for {project.title}</DialogDescription>
                    
                    <div className="h-[50vh] md:h-full md:flex-1 relative bg-zinc-50 flex items-center justify-center p-6 md:p-24 overflow-hidden border-b md:border-b-0 border-zinc-100">
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

                        <button onClick={prevImage} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-100 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all bg-white/90 backdrop-blur-xl z-50 shadow-2xl" ><ChevronLeft className="w-6 h-6 md:w-8 md:h-8" /></button>
                        <button onClick={nextImage} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-zinc-100 hover:bg-black hover:text-white text-black flex items-center justify-center transition-all bg-white/90 backdrop-blur-xl z-50 shadow-2xl" ><ChevronRight className="w-8 h-8 md:w-8 md:h-8" /></button>
                        
                        <div className="absolute bottom-4 md:bottom-10 flex gap-4 overflow-x-auto max-w-[95%] md:max-w-[90%] px-4 md:px-8 scrollbar-hide py-4 border border-zinc-100 bg-white/90 backdrop-blur-2xl rounded-[2rem] z-50 shadow-2xl">
                            {allGalleryImages.map((img, i) => (
                                <button key={i} onClick={() => setCurrentImageIndex(i)} className={`relative flex-shrink-0 w-12 h-16 md:w-16 md:h-20 rounded-xl overflow-hidden border-2 transition-all ${currentImageIndex === i ? 'border-rose-600 scale-110' : 'border-transparent opacity-30 hover:opacity-100'}`}>
                                    <Image src={img.src} alt="thumbnail" fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-[50vh] md:h-full md:w-[450px] md:flex-none bg-white p-8 md:p-16 border-l border-zinc-100 overflow-y-auto scrollbar-hide relative flex flex-col justify-center">
                        <button onClick={() => setIsGalleryOpen(false)} className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-rose-600 transition-all z-50 shadow-2xl"><X className="w-6 h-6" /></button>
                        <div>
                            <span className="text-rose-600 text-[9px] font-black uppercase tracking-[0.4em] italic mb-6 block">Internal Asset Viewer</span>
                            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none text-black font-headline mb-6">{project.title}</h2>
                            <p className="text-zinc-400 text-lg italic leading-relaxed font-medium">{project.shortDescription}</p>
                            <div className="mt-12 pt-12 border-t border-zinc-50 flex flex-wrap gap-2">
                                {project.techStack.slice(0, 4).map(t => <span key={t} className="px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-[8px] font-black uppercase italic text-zinc-400">{t}</span>)}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <Footer />
        </div>
    );
}
