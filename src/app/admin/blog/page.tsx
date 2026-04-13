"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { posts } from "@/data/blog-posts";
import { Plus, Search, Edit3, Trash2, LayoutDashboard, Share2, Eye, Shield, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogAdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [leadCount, setLeadCount] = useState<number | string>("...");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [form, setForm] = useState({ title: "", slug: "", category: "SaaS", excerpt: "", content: "" });

    // Fetch Real-time lead count from Firestore
    useState(() => {
        const fetchLeads = async () => {
            try {
                const { db } = await import("@/lib/firebase");
                const { collection, getCountFromServer } = await import("firebase/firestore");
                const coll = collection(db, "contacts");
                const snapshot = await getCountFromServer(coll);
                setLeadCount(snapshot.data().count);
            } catch (error) {
                console.error("Fetch Error:", error);
                setLeadCount("OFFLINE");
            }
        };
        fetchLeads();
    });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "aqib123") {
            setIsAuthenticated(true);
        } else {
            alert("Unauthorized Access");
        }
    };

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#080808] flex items-center justify-center p-6 text-white font-sans">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl"
                >
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-20 h-20 rounded-full bg-rose-600/10 flex items-center justify-center mb-6 border border-rose-600/20">
                            <Lock className="w-8 h-8 text-rose-500" />
                        </div>
                        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-center text-white">Security Check</h1>
                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic text-center">Blog Authority Access Terminal</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative group">
                            <input 
                                type="password" 
                                placeholder="ACCESS_KEY" 
                                className="w-full bg-black/40 border border-white/5 px-6 py-4 rounded-full text-[12px] font-black uppercase tracking-widest placeholder:text-zinc-700 focus:border-rose-600 transition-all outline-none italic text-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="w-full py-4 bg-white text-black rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 hover:text-white transition-all shadow-2xl font-headline italic">
                            Initialize Connection
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-rose-500/30 relative">
            <Navbar />
            
            <main className="pt-40 pb-40 container mx-auto px-6 max-w-7xl">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <LayoutDashboard className="w-5 h-5 text-rose-500" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 italic leading-none">Management Core</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white font-headline">
                            Blog Terminal
                        </h1>
                    </div>
                    
                    <button 
                        onClick={() => setIsCreateModalOpen(true)}
                        className="flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 hover:text-white transition-all shadow-2xl font-headline italic"
                    >
                        <Plus className="w-4 h-4" /> Deploy New Article
                    </button>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { label: "Articles Live", val: posts.length, icon: Share2 },
                        { label: "Active Nodes", val: "FIREBASE_UP", icon: Shield },
                        { label: "Total Inquiries", val: leadCount, icon: Eye },
                        { label: "Current Identity", val: "AQIB_ROOT", icon: Shield },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-md">
                            <stat.icon className="w-5 h-5 text-rose-500 mb-4" />
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2 italic">{stat.label}</div>
                            <div className="text-2xl font-black italic uppercase tracking-tighter text-white font-headline">{stat.val}</div>
                        </div>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative mb-12">
                    <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600" />
                    <input 
                        type="text"
                        placeholder="SEARCH INDEX..."
                        className="w-full bg-white/5 border border-white/5 px-20 py-6 rounded-full text-zinc-300 font-black tracking-widest text-[11px] uppercase placeholder:text-zinc-800 focus:border-rose-600/50 transition-all outline-none italic shadow-2xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Articles Table/Grid */}
                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post, index) => (
                            <motion.div 
                                key={post.slug}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group bg-white/5 hover:bg-white/[0.08] border border-white/5 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-10 transition-all backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-10">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-black border border-white/5 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img src={post.image} alt="" className="w-full h-full object-cover opacity-50 group-hover:opacity-100" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 bg-rose-600/10 text-rose-500 text-[8px] rounded-full font-black uppercase tracking-widest border border-rose-600/20 italic">
                                                {post.category}
                                            </span>
                                            <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600 italic">
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-black italic uppercase tracking-tighter text-white font-headline line-clamp-1">
                                            {post.title}
                                        </h3>
                                        <p className="text-zinc-500 text-[10px] font-medium italic mt-2 line-clamp-1">{post.excerpt}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-rose-600 transition-all group/btn">
                                        <Edit3 className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-zinc-800 transition-all group/btn">
                                        <Trash2 className="w-4 h-4 text-zinc-500 group-hover/btn:text-white transition-all" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </main>

            {/* Create Modal */}
            <AnimatePresence>
                {isCreateModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCreateModalOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 overflow-y-auto max-h-[90vh] shadow-[0_0_100px_rgba(225,29,72,0.1)] font-sans"
                        >
                            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-10 font-headline">Draft New Article</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic ml-4">Article Title</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter Title..." 
                                        className="w-full bg-white/5 border border-white/5 p-5 rounded-3xl text-white outline-none focus:border-rose-600 transition-all italic font-medium"
                                        value={form.title}
                                        onChange={(e) => setForm({...form, title: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic ml-4">Slug Identifier</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. saas-invoice-app" 
                                        className="w-full bg-white/5 border border-white/5 p-5 rounded-3xl text-white outline-none focus:border-rose-600 transition-all italic font-medium"
                                        value={form.slug}
                                        onChange={(e) => setForm({...form, slug: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic ml-4">SEO Excerpt (Meta Description)</label>
                                <textarea 
                                    rows={3}
                                    placeholder="Brief summary for indexing..." 
                                    className="w-full bg-white/5 border border-white/5 p-5 rounded-3xl text-white outline-none focus:border-rose-600 transition-all italic font-medium resize-none"
                                    value={form.excerpt}
                                    onChange={(e) => setForm({...form, excerpt: e.target.value})}
                                />
                            </div>

                            <div className="space-y-2 mb-10">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 italic ml-4">Main Content (HTML/Rich Text)</label>
                                <textarea 
                                    rows={8}
                                    placeholder="Enter full technical brief content..." 
                                    className="w-full bg-white/5 border border-white/5 p-5 rounded-3xl text-white outline-none focus:border-rose-600 transition-all italic font-medium resize-none"
                                    value={form.content}
                                    onChange={(e) => setForm({...form, content: e.target.value})}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <button 
                                    onClick={async () => {
                                        const { saveBlogPostAction } = await import("./actions");
                                        const res = await saveBlogPostAction(form);
                                        if (res.success) {
                                          alert("ARTICLE DEPLOYED SUCCESSFULLY");
                                          setIsCreateModalOpen(false);
                                          window.location.reload();
                                        } else {
                                          alert("DEPLOYMENT FAILED: " + res.error);
                                        }
                                    }}
                                    className="flex-1 py-5 bg-rose-600 text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-500 transition-all shadow-2xl font-headline italic"
                                >
                                    Confirm Live Deployment
                                </button>
                                <button 
                                    onClick={() => setIsCreateModalOpen(false)}
                                    className="px-10 py-5 bg-white/5 text-zinc-500 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-white/10 transition-all italic"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
