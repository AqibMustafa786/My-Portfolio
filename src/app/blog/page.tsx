"use client";

import { useState, useMemo, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Hash, Globe } from "lucide-react";
import Link from "next/link";
import { posts as staticPosts } from "@/data/blog-posts";
import { cn } from "@/lib/utils";

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [cloudPosts, setCloudPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchCloudBlogs = async () => {
            try {
                const { db } = await import("@/lib/firebase");
                const { collection, getDocs, orderBy, query } = await import("firebase/firestore");
                const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(q);
                const blogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCloudPosts(blogs);
            } catch (error) {
                console.error("Firestore Fetch Error:", error);
            }
        };
        fetchCloudBlogs();
    }, []);

    const allPosts = useMemo(() => {
        // Merge static and cloud posts, prioritizing cloud (newer)
        const combined = [...cloudPosts, ...staticPosts];
        // Deduplicate by slug
        return combined.filter((post, index, self) =>
            index === self.findIndex((p) => p.slug === post.slug)
        );
    }, [cloudPosts]);

    const categories = useMemo(() => {
        const cats = ["All", ...new Set(allPosts.map(post => post.category))];
        return cats;
    }, [allPosts]);

    const filteredPosts = useMemo(() => {
        return allPosts.filter(post => {
            const matchesQuery = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                               post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === "All" || post.category === activeCategory;
            return matchesQuery && matchesCategory;
        });
    }, [searchQuery, activeCategory, allPosts]);

    return (
        <div className="min-h-screen bg-[#080808] text-white selection:bg-rose-500/30 font-sans relative overflow-x-hidden">
            <Navbar />

            {/* Subtle Gradient Glows */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-rose-600/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />

            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-rose-500 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block italic">Insight Archives 2026</span>
                        <h1 className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.8] text-white mb-12 font-headline">
                            Technical <span className="text-rose-600 not-italic">Journal</span>
                        </h1>
                        <p className="text-zinc-400 text-xl italic font-medium leading-relaxed border-x border-white/5 px-10 md:px-16">
                            Architectural deep-dives, business automation strategies, and the evolution of premium digital products.
                        </p>
                    </motion.div>
                </div>

                {/* Filters & Search */}
                <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row gap-8 items-center justify-between border-b border-white/5 pb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all italic border",
                                    activeCategory === cat 
                                        ? "bg-rose-600 border-rose-600 text-white shadow-xl shadow-rose-600/20" 
                                        : "bg-white/5 border-white/10 text-zinc-400 hover:border-white/20 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                        <input 
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm italic font-medium text-white focus:outline-none focus:border-rose-600 transition-all placeholder:text-zinc-600"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.slug}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="group flex flex-col bg-[#111] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-rose-600/50 transition-all duration-700 h-full relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                
                                <div className="relative aspect-video bg-zinc-900 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0"
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="px-4 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[8px] font-black uppercase tracking-widest rounded-full italic shadow-2xl">
                                            {post.category}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative z-10">
                                    <div className="flex items-center gap-5 text-[8px] font-black uppercase tracking-widest text-zinc-500 mb-6 italic">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3 text-rose-500" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2 border-l border-white/10 pl-5">
                                            <Globe className="w-3 h-3 text-blue-500" />
                                            Public Access
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-black text-white mb-6 font-headline italic uppercase tracking-tighter leading-tight group-hover:text-rose-500 transition-colors">
                                        <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {post.title}
                                        </Link>
                                    </h2>
                                    
                                    <p className="text-zinc-500 text-base leading-relaxed mb-10 flex-grow italic font-medium line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-white text-[9px] font-black uppercase tracking-[0.3em] italic group-hover:text-rose-500 transition-all pt-6 border-t border-white/5">
                                        Open Protocol <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-40 border border-dashed border-white/5 rounded-[4rem]">
                        <p className="text-zinc-500 font-headline italic uppercase tracking-tighter text-3xl">No articles found matching your criteria</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
