"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

import { posts } from "@/data/blog-posts";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />

            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[128px]" />
            </div>

            <main className="pt-32 pb-20 container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Latest <span className="text-purple-400">Insights</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Thoughts, tutorials, and updates on technology and development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors"
                        >
                            <div className="relative aspect-video bg-gray-900 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                {/* Image Placeholder - relying on simple div if image fails or use component */}
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-700">
                                    Image: {post.category}
                                </div>
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full font-medium">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {post.author}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-purple-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
