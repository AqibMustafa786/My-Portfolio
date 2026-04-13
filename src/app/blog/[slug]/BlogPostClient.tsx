"use client";

import { use } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { posts } from "@/data/blog-posts";
import { MoveLeft, Calendar, User, Clock, Share2 } from "lucide-react";
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
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans">
            <Navbar />

            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10 max-w-5xl">
                <Link href="/blog" className="inline-flex items-center gap-4 text-zinc-400 hover:text-black mb-16 transition-all group">
                    <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-xl">
                        <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] italic leading-none">Back to Articles</span>
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <header className="mb-24">
                        <div className="flex items-center gap-2 mb-10">
                            <span className="px-5 py-2 bg-zinc-50 text-black text-[9px] rounded-full font-black uppercase tracking-widest border border-zinc-100 italic">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-black mb-12 font-headline">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 border-y border-zinc-50 py-10 italic">
                            <div className="flex items-center gap-3">
                                <User className="w-4 h-4 text-rose-600" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-3">
                                <Calendar className="w-4 h-4 text-black" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-black" />
                                15 Min Read
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none text-zinc-500 italic font-medium leading-relaxed prose-headings:text-black prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-headline prose-strong:text-black prose-a:text-rose-600 hover:prose-a:text-rose-700 transition-colors">
                        <div dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p><p>Full content coming soon...</p>` }} />
                    </div>

                    <div className="mt-32 pt-12 border-t border-zinc-50 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] italic">
                            Tags: <span className="text-black">{post.category}, Tech, 2026</span>
                        </div>
                        <button className="flex items-center gap-4 px-10 py-4 bg-black text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 transition-all shadow-2xl font-headline italic">
                            <Share2 className="w-4 h-4" /> Share Article
                        </button>
                    </div>
                </motion.article>
            </main>
            <Footer />
        </div>
    );
}
