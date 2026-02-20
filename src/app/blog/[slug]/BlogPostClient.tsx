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
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[128px]" />
            </div>

            <main className="pt-32 pb-20 container mx-auto px-4 relative z-10 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group">
                    <MoveLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <header className="mb-12 text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-medium border border-purple-500/20">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 border-y border-white/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-purple-400" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-blue-400" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-green-400" />
                                15 min read
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white prose-code:text-purple-300">
                        <div dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p><p>Full content coming soon...</p>` }} />
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                        <div className="text-gray-400 text-sm">
                            Tags: <span className="text-white">{post.category}, Tech, 2026</span>
                        </div>
                        <button className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors">
                            <Share2 className="w-4 h-4" /> Share Article
                        </button>
                    </div>
                </motion.article>
            </main>
            <Footer />
        </div>
    );
}
