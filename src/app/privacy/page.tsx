"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans">
            <Navbar />
            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10 max-w-5xl">
                <h1 className="text-6xl font-black italic uppercase tracking-tighter text-black mb-16 font-headline">Privacy <span className="text-rose-600 not-italic">Policy</span></h1>
                <div className="prose prose-lg max-w-none text-zinc-500 italic font-medium leading-relaxed space-y-12">
                    <p className="text-black font-black uppercase tracking-widest text-xs mb-10 block not-italic">Last updated: February 17, 2026</p>
                    
                    <div>
                        <h3 className="text-2xl font-black text-black font-headline uppercase italic tracking-tight mb-4">1. Information Collection</h3>
                        <p>I do not collect any personal data from visitors to this portfolio website, except when you voluntarily provide it through the contact form (Name, Email, Message).</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-black font-headline uppercase italic tracking-tight mb-4">2. Use of Information</h3>
                        <p>Any information you provide is used solely to respond to your inquiries or business requests. I do not share, sell, or disclose your information to third parties.</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-black font-headline uppercase italic tracking-tight mb-4">3. Cookies</h3>
                        <p>This website may use local storage or cookies solely for the purpose of maintaining your theme preference (Dark/Light mode). No tracking cookies are used.</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-black font-headline uppercase italic tracking-tight mb-4">4. Third-Party Links</h3>
                        <p>This website contains links to other sites (e.g., GitHub, LinkedIn, Fiverr). Please be aware that I am not responsible for the content or privacy practices of such other sites.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
