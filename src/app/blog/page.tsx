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
        // Source of Truth: ONLY Cloud Posts
        // This ensures that when you delete from Admin, it vanishes from the site.
        return cloudPosts;
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
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans relative overflow-x-hidden">
            <Navbar />

            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-rose-500 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block italic">Insight Archives 2026</span>
                        <h1 className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.8] text-black mb-12 font-headline">
                            Technical <span className="text-rose-600 not-italic">Journal</span>
                        </h1>
                        <p className="text-zinc-500 text-xl italic font-medium leading-relaxed px-10 md:px-16 border-x border-zinc-100">
                            Architectural deep-dives, business automation strategies, and the evolution of premium digital products.
                        </p>
                    </motion.div>
                </div>

                {/* Filters & Search */}
                <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row gap-8 items-center justify-between border-b border-zinc-100 pb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all italic border",
                                    activeCategory === cat 
                                        ? "bg-black border-black text-white shadow-xl shadow-black/10" 
                                        : "bg-zinc-50 border-zinc-100 text-zinc-500 hover:border-rose-600/30 hover:text-rose-600"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                        <input 
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-14 pr-6 text-sm italic font-medium text-black focus:outline-none focus:border-rose-600 transition-all placeholder:text-zinc-400 shadow-sm"
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
                                className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-zinc-100 hover:border-rose-600/50 transition-all duration-700 h-full relative shadow-sm hover:shadow-2xl hover:shadow-rose-600/5 hover:-translate-y-2"
                            >
                                <div className="relative aspect-video bg-zinc-100 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md border border-zinc-100 text-black text-[8px] font-black uppercase tracking-widest rounded-full italic shadow-xl">
                                            {post.category}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative z-10">
                                    <div className="flex items-center gap-5 text-[8px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3 text-rose-500" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2 border-l border-zinc-100 pl-5">
                                            <Globe className="w-3 h-3 text-rose-500" />
                                            Public Access
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-black text-black mb-6 font-headline italic uppercase tracking-tighter leading-tight group-hover:text-rose-600 transition-colors">
                                        <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {post.title}
                                        </Link>
                                    </h2>
                                    
                                    <p className="text-zinc-500 text-base leading-relaxed mb-10 flex-grow italic font-medium line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-black text-[9px] font-black uppercase tracking-[0.3em] italic group-hover:text-rose-600 transition-all pt-6 border-t border-zinc-100">
                                        Read More <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-40 border border-dashed border-zinc-100 rounded-[4rem] bg-zinc-50/50">
                        <p className="text-zinc-400 font-headline italic uppercase tracking-tighter text-3xl">No articles found matching your criteria</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
