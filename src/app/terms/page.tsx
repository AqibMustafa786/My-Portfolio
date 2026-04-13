"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-rose-500/10 font-sans">
            <Navbar />
            <main className="pt-40 pb-40 container mx-auto px-6 relative z-10 max-w-5xl">
                <h1 className="text-6xl font-black italic uppercase tracking-tighter text-black mb-16 font-headline">Terms Of <span className="text-rose-600 not-italic">Service</span></h1>
                <div className="prose prose-lg max-w-none text-zinc-500 italic font-medium leading-relaxed space-y-12">
                    <p className="text-black font-black uppercase tracking-widest text-xs mb-10 block not-italic">Last updated: February 17, 2026</p>
                    
                    <div>
                        <h3 className="text-2xl font-black text-black font-headline uppercase italic tracking-tight mb-4">1. Introduction</h3>
                        <p>Welcome to Aqib Mustafa's portfolio website. By accessing this website, you agree to be bound by these Terms of Service.</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-black font-headline uppercase italic tracking-tight mb-4">2. Intellectual Property</h3>
                        <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights.</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-black font-headline uppercase italic tracking-tight mb-4">3. Use License</h3>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only.</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-black font-headline uppercase italic tracking-tight mb-4">4. Disclaimer</h3>
                        <p>The materials on this website are provided on an 'as is' basis. Aqib Mustafa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
