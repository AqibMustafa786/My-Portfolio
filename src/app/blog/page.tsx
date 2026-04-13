"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";

import { posts } from "@/data/blog-posts";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans relative overflow-x-hidden">
            <Navbar />

            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-rose-600 font-black tracking-[0.6em] uppercase text-[10px] mb-8 block italic">Journal of Innovation</span>
                        <h1 className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.8] text-black mb-12 font-headline">
                            Latest <span className="text-rose-600 not-italic">Insights</span>
                        </h1>
                        <p className="text-zinc-500 text-xl max-w-3xl mx-auto italic font-medium leading-relaxed border-x border-zinc-100 px-16">
                            Technical deep-dives, architectural considerations, and the future of full-stack engineering.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group flex flex-col bg-zinc-50 rounded-[3rem] overflow-hidden border border-zinc-100 hover:border-rose-600 hover:bg-white transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-rose-500/5 h-full"
                        >
                            <div className="relative aspect-video bg-zinc-200 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-5 py-2 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-full italic">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-6 italic">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3 h-3 text-rose-600" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-3 h-3 text-rose-600" />
                                        {post.author}
                                    </div>
                                </div>

                                <h2 className="text-3xl font-black text-black mb-6 font-headline italic uppercase tracking-tighter leading-none group-hover:text-rose-600 transition-colors">
                                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-zinc-500 text-lg leading-relaxed mb-10 flex-grow italic font-medium">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-black text-[10px] font-black uppercase tracking-[0.3em] italic group-hover:text-rose-600 transition-all">
                                    Read Article <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
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
