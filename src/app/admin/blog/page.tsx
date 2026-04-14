"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { posts } from "@/data/blog-posts";
import { Plus, Search, Edit3, Trash2, LayoutDashboard, Share2, Eye, Shield, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogAdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [leadCount, setLeadCount] = useState<number | string>("...");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [form, setForm] = useState({ 
        title: "", 
        slug: "", 
        category: "SaaS", 
        excerpt: "", 
        image: "",
        imageAlt: "",
        intro: "",
        sections: [{ heading: "", body: "" }],
        faqs: [{ q: "", a: "" }],
        conclusion: "" 
    });

    const addSection = () => setForm({ ...form, sections: [...form.sections, { heading: "", body: "" }] });
    const addFAQ = () => setForm({ ...form, faqs: [...form.faqs, { q: "", a: "" }] });

    const constructSEOContent = (f: typeof form) => {
        let html = `<p class="text-xl mb-12 font-medium italic text-zinc-600 leading-relaxed">${f.intro}</p>`;
        
        f.sections.forEach(s => {
            if (s.heading) {
                html += `<h2 class="text-3xl font-black italic uppercase tracking-tighter text-black mt-20 mb-8 font-headline">${s.heading}</h2>`;
            }
            if (s.body) {
                html += `<p class="mb-10 text-zinc-500 leading-relaxed">${s.body.replace(/\n/g, '<br/>')}</p>`;
            }
        });

        if (f.faqs.length > 0 && f.faqs[0].q) {
            html += `<div class="mt-20 p-12 bg-zinc-50 rounded-[3rem] border border-zinc-100">
                <h2 class="text-2xl font-black italic uppercase tracking-tighter text-black mb-10 font-headline">Frequently Asked Questions</h2>
                <div class="space-y-8">`;
            f.faqs.forEach(faq => {
                html += `<div>
                    <h3 class="text-sm font-black uppercase tracking-widest text-rose-600 mb-2 italic">${faq.q}</h3>
                    <p class="text-zinc-500 italic">${faq.a}</p>
                </div>`;
            });
            html += `</div></div>`;
        }

        if (f.conclusion) {
            html += `<div class="mt-20 pt-12 border-t border-zinc-100">
                <p class="text-xl font-black italic uppercase tracking-tighter text-black mb-6 font-headline leading-none">The Final Brief</p>
                <p class="text-zinc-500 italic mb-10">${f.conclusion}</p>
            </div>`;
        }

        return html;
    };

    // Fetch Real-time lead count from Firestore ONLY after login
    useEffect(() => {
        if (!isAuthenticated) return;

        const fetchLeads = async () => {
            try {
                const { db, auth } = await import("@/lib/firebase");
                const { collection, getCountFromServer } = await import("firebase/firestore");
                const coll = collection(db, "contacts");
                const snapshot = await getCountFromServer(coll);
                setLeadCount(snapshot.data().count);
            } catch (error: any) {
                setLeadCount("ERR");
            }
        };
        fetchLeads();
    }, [isAuthenticated]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { auth } = await import("@/lib/firebase");
            const { signInWithEmailAndPassword } = await import("firebase/auth");
            // Force lowercase email to prevent registration/login case mismatches
            await signInWithEmailAndPassword(auth, email.toLowerCase().trim(), password);
            setIsAuthenticated(true);
        } catch (error: any) {
            console.error("Auth Fail:", error);
            alert(`AUTH_DENIED: ${error.code || "Invalid Credentials"}`);
        }
    };

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 text-black font-sans">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-white border border-zinc-200 p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-600/5 blur-3xl rounded-full" />
                    <div className="flex flex-col items-center mb-10 relative z-10">
                        <div className="w-20 h-20 rounded-full bg-rose-600/5 flex items-center justify-center mb-6 border border-rose-600/10">
                            <Lock className="w-8 h-8 text-rose-500" />
                        </div>
                        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-center text-black">Security Check</h1>
                        <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em] mt-2 italic text-center">Identity Verification Node</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4 relative z-10">
                        <input type="email" placeholder="ADMIN_IDENTITY" className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-widest focus:border-rose-600 transition-all outline-none italic text-black" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="ACCESS_PHRASE" className="w-full bg-zinc-50 border border-zinc-100 px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-widest focus:border-rose-600 transition-all outline-none italic text-black" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="w-full py-4 bg-black text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 transition-all font-headline italic mt-4">Establish Authentication</button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-rose-500/10 relative">
            <Navbar />
            
            <main className="pt-40 pb-40 container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                                <LayoutDashboard className="w-5 h-5 text-rose-500" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 italic leading-none">Management Core</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-black font-headline">Blog Terminal</h1>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                        <button 
                            onClick={() => setIsCreateModalOpen(true)}
                            className="flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 transition-all shadow-xl font-headline italic"
                        >
                            <Plus className="w-4 h-4" /> Deploy New Article
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
                    {[
                        { label: "Articles Live", val: posts.length, icon: Share2 },
                        { label: "Active Nodes", val: "FIREBASE_UP", icon: Shield },
                        { label: "Total Inquiries", val: leadCount, icon: Eye },
                        { label: "Current Identity", val: "AQIB_ROOT", icon: Shield },
                    ].map((stat, i) => (
                        <div key={i} className="bg-zinc-50 border border-zinc-100 p-8 rounded-3xl">
                            <stat.icon className="w-5 h-5 text-rose-500 mb-4" />
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 italic">{stat.label}</div>
                            <div className="text-2xl font-black italic uppercase tracking-tighter text-black font-headline">{stat.val}</div>
                        </div>
                    ))}
                </div>

                <div className="relative mb-12">
                    <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                    <input type="text" placeholder="SEARCH INDEX..." className="w-full bg-zinc-50 border border-zinc-100 px-20 py-6 rounded-full text-black font-black tracking-widest text-[11px] uppercase placeholder:text-zinc-300 focus:border-rose-600/50 transition-all outline-none italic shadow-sm" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>

                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((p, index) => (
                            <motion.div key={p.slug} layout initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="group bg-white hover:bg-zinc-50 border border-zinc-100 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-10 transition-all shadow-sm hover:shadow-xl">
                                <div className="flex items-center gap-10">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-100 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img src={p.image} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 bg-rose-600/5 text-rose-600 text-[8px] rounded-full font-black uppercase tracking-widest border border-rose-600/10 italic">{p.category}</span>
                                            <span className="text-[8px] font-black uppercase tracking-widest text-zinc-400 italic">{p.date}</span>
                                        </div>
                                        <h3 className="text-xl font-black italic uppercase tracking-tighter text-black font-headline line-clamp-1">{p.title}</h3>
                                        <p className="text-zinc-400 text-[10px] font-medium italic mt-2 line-clamp-1">{p.excerpt}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button 
                                        onClick={() => {
                                            setForm({ ...form, title: p.title, slug: p.slug, category: p.category, excerpt: p.excerpt, image: p.image });
                                            setIsCreateModalOpen(true);
                                        }}
                                        className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center hover:bg-black hover:text-white transition-all hover:shadow-lg"
                                    >
                                        <Edit3 className="w-4 h-4" />
                                    </button>
                                    <button 
                                        onClick={async () => {
                                            if (confirm("Delete article?")) {
                                                const { db } = await import("@/lib/firebase");
                                                const { collection, query, where, getDocs, deleteDoc } = await import("firebase/firestore");
                                                const q = query(collection(db, "blogs"), where("slug", "==", p.slug));
                                                const snap = await getDocs(q);
                                                snap.forEach(async d => await deleteDoc(d.ref));
                                                alert("DELETED");
                                                window.location.reload();
                                            }
                                        }}
                                        className="w-10 h-10 rounded-full bg-rose-600/5 border border-rose-600/10 text-rose-500 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all shadow-md"
                                    >
                                        <Trash2 className="w-4 h-4" />
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
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCreateModalOpen(false)} className="absolute inset-0 bg-white/80 backdrop-blur-xl" />
                        <motion.div initial={{ opacity: 0, scale: 0.95, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 30 }} className="relative w-full max-w-5xl bg-white border border-zinc-100 rounded-[3rem] p-12 overflow-y-auto max-h-[90vh] shadow-2xl font-sans">
                            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-black mb-10 font-headline italic">Automated SEO Editor</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic ml-4">Title Optimized (H1)</label>
                                    <input type="text" className="w-full bg-zinc-50 border border-zinc-100 p-5 rounded-3xl text-black outline-none focus:border-rose-600 transition-all italic" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic ml-4">SEO Slug</label>
                                    <input type="text" className="w-full bg-zinc-50 border border-zinc-100 p-5 rounded-3xl text-black outline-none focus:border-rose-600 transition-all italic" value={form.slug} onChange={(e) => setForm({...form, slug: e.target.value})} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic ml-4">Featured Image URL</label>
                                    <input type="text" className="w-full bg-zinc-50 border border-zinc-100 p-5 rounded-3xl text-black outline-none focus:border-rose-600 transition-all italic" value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic ml-4">Image ALT Text (SEO Rule)</label>
                                    <input type="text" placeholder="Describe the image for Google..." className="w-full bg-zinc-50 border border-zinc-100 p-5 rounded-3xl text-black outline-none focus:border-rose-600 transition-all italic" value={form.imageAlt} onChange={(e) => setForm({...form, imageAlt: e.target.value})} />
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic ml-4">Introduction (Hook)</label>
                                <textarea rows={2} className="w-full bg-zinc-50 border border-zinc-100 p-6 rounded-[2rem] text-black outline-none focus:border-rose-600 transition-all italic resize-none" value={form.intro} onChange={(e) => setForm({...form, intro: e.target.value})} />
                            </div>

                            <div className="space-y-6 mb-12">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic ml-4">Blog Sections (H2 Optimization)</label>
                                {form.sections.map((sec, idx) => (
                                    <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] space-y-4">
                                        <input type="text" placeholder={`H2 Header Section ${idx + 1}`} className="w-full bg-white border border-zinc-100 p-4 rounded-2xl text-black outline-none italic font-black uppercase" value={sec.heading} onChange={(e) => {
                                            const newSecs = [...form.sections];
                                            newSecs[idx].heading = e.target.value;
                                            setForm({...form, sections: newSecs});
                                        }} />
                                        <textarea rows={4} placeholder="Content Body... (Use new lines for gaps)" className="w-full bg-white border border-zinc-100 p-6 rounded-[2rem] text-zinc-500 outline-none italic resize-none" value={sec.body} onChange={(e) => {
                                            const newSecs = [...form.sections];
                                            newSecs[idx].body = e.target.value;
                                            setForm({...form, sections: newSecs});
                                        }} />
                                    </div>
                                ))}
                                <button onClick={addSection} className="w-full py-4 border-2 border-dashed border-zinc-200 text-zinc-400 rounded-3xl font-black uppercase tracking-widest text-[9px] hover:border-rose-600 hover:text-rose-600 transition-all italic">+ Add New H2 Section</button>
                            </div>

                            <div className="space-y-6 mb-12">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic ml-4">FAQ Automation (Smart Ranking)</label>
                                {form.faqs.map((faq, idx) => (
                                    <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Question?" className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl text-black outline-none italic text-[10px]" value={faq.q} onChange={(e) => {
                                            const newFaqs = [...form.faqs];
                                            newFaqs[idx].q = e.target.value;
                                            setForm({...form, faqs: newFaqs});
                                        }} />
                                        <input type="text" placeholder="Answer..." className="bg-zinc-50 border border-zinc-100 p-4 rounded-2xl text-black outline-none italic text-[10px]" value={faq.a} onChange={(e) => {
                                            const newFaqs = [...form.faqs];
                                            newFaqs[idx].a = e.target.value;
                                            setForm({...form, faqs: newFaqs});
                                        }} />
                                    </div>
                                ))}
                                <button onClick={addFAQ} className="w-full py-4 border-2 border-dashed border-zinc-200 text-zinc-400 rounded-2xl font-black uppercase tracking-widest text-[9px] hover:border-rose-600 hover:text-rose-600 transition-all italic">+ Add New FAQ Item</button>
                            </div>

                            <div className="space-y-2 mb-12">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 italic ml-4">Conclusion & Call-to-Action</label>
                                <textarea rows={2} className="w-full bg-zinc-50 border border-zinc-100 p-6 rounded-[2rem] text-black outline-none focus:border-rose-600 transition-all italic resize-none" value={form.conclusion} onChange={(e) => setForm({...form, conclusion: e.target.value})} />
                            </div>

                            <div className="flex flex-col md:flex-row gap-4 sticky bottom-0 bg-white/80 backdrop-blur-md pt-4">
                                <button 
                                    onClick={async () => {
                                        try {
                                            const { db } = await import("@/lib/firebase");
                                            const { collection, query, where, getDocs, addDoc, updateDoc, serverTimestamp } = await import("firebase/firestore");
                                            
                                            const generatedContent = constructSEOContent(form);
                                            
                                            const postData = {
                                                title: form.title,
                                                slug: form.slug,
                                                category: form.category,
                                                excerpt: form.excerpt || form.intro.slice(0, 150),
                                                image: form.image,
                                                imageAlt: form.imageAlt,
                                                content: generatedContent,
                                                author: "Aqib Mustafa",
                                                updatedAt: serverTimestamp(),
                                                published: true
                                            };

                                            const q = query(collection(db, "blogs"), where("slug", "==", form.slug));
                                            const snapshot = await getDocs(q);

                                            if (!snapshot.empty) {
                                                await updateDoc(snapshot.docs[0].ref, postData);
                                                alert("SEO ARTICLE UPDATED");
                                            } else {
                                                await addDoc(collection(db, "blogs"), {
                                                    ...postData,
                                                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                                                    createdAt: serverTimestamp(),
                                                });
                                                alert("NEW SEO ARTICLE DEPLOYED");
                                            }
                                            setIsCreateModalOpen(false);
                                            window.location.reload();
                                        } catch (error: any) { alert("ERROR"); }
                                    }}
                                    className="flex-1 py-5 bg-black text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-rose-600 transition-all shadow-xl font-headline italic"
                                >
                                    Establish SEO Broadcast
                                </button>
                                <button onClick={() => setIsCreateModalOpen(false)} className="px-10 py-5 bg-zinc-100 text-zinc-400 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-zinc-200 transition-all italic">Abort</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <Footer />
        </div>
    );
}
