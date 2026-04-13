"use client";

import { use, useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { posts as staticPosts } from "@/data/blog-posts";
import { MoveLeft, Calendar, User, Clock, Share2, Globe, Shield, Loader2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

interface BlogPostClientProps {
    params: Promise<{
        slug: string;
    }>
}

export default function BlogPostClient({ params }: BlogPostClientProps) {
    const { slug } = use(params);
    const [post, setPost] = useState<any>(staticPosts.find(p => p.slug === slug));
    const [loading, setLoading] = useState(!post);

    useEffect(() => {
        if (!post) {
            const fetchCloudPost = async () => {
                try {
                    const { db } = await import("@/lib/firebase");
                    const { collection, getDocs, query, where } = await import("firebase/firestore");
                    const q = query(collection(db, "blogs"), where("slug", "==", slug));
                    const snapshot = await getDocs(q);
                    
                    if (!snapshot.empty) {
                        setPost({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() });
                    }
                } catch (error) {
                    console.error("Cloud Fetch Error:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchCloudPost();
        }
    }, [slug, post]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#080808] flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-rose-500 animate-spin" />
            </div>
        );
    }

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#080808] text-white selection:bg-rose-500/30 font-sans relative overflow-x-hidden">
            <Navbar />

            {/* Subtle Gradient Glows */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-rose-600/5 to-transparent pointer-events-none" />
            
            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10 max-w-5xl">
                <Link href="/blog" className="inline-flex items-center gap-4 text-zinc-500 hover:text-white mb-16 transition-all group">
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all shadow-xl bg-white/5">
                        <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] italic leading-none">Global Index</span>
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <header className="mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <span className="px-5 py-2 bg-rose-600/10 text-rose-500 text-[9px] rounded-full font-black uppercase tracking-widest border border-rose-600/20 italic">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-2 px-5 py-2 bg-white/5 text-zinc-500 text-[9px] rounded-full font-black uppercase tracking-widest border border-white/5 italic">
                                <Shield className="w-3 h-3" /> Verified Secure
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white mb-12 font-headline">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 border-y border-white/5 py-10 italic">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4 text-rose-500" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="w-4 h-4 text-white" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-white" />
                                12 Min Read
                            </div>
                        </div>
                    </header>

                    {post.image && (
                        <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-24 border border-white/5 shadow-2xl">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                        </div>
                    )}

                    <div className="prose prose-invert prose-lg max-w-none text-zinc-400 italic font-medium leading-relaxed prose-headings:text-white prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-headline prose-strong:text-white prose-a:text-rose-500 hover:prose-a:text-rose-400 transition-colors">
                        <div dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p><p>Full content for this technical brief is being synchronized...</p>` }} />
                    </div>

                    <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] italic">
                            Metadata: <span className="text-white">{post.category}, Global-Scale, 2026-X</span>
                        </div>
                        <button className="flex items-center gap-4 px-10 py-4 bg-white text-black rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 hover:text-white transition-all shadow-2xl font-headline italic">
                            <Share2 className="w-4 h-4" /> Broadcast Information
                        </button>
                    </div>
                </motion.article>
            </main>
            <Footer />
        </div>
    );
}
