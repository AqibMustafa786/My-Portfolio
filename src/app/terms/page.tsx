"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-4 relative z-10 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p>Last updated: February 17, 2026</p>
                    <h3>1. Introduction</h3>
                    <p>Welcome to Aqib Mustafa's portfolio website. By accessing this website, you agree to be bound by these Terms of Service.</p>

                    <h3>2. Intellectual Property</h3>
                    <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and other proprietary (including but not limited to intellectual property) rights.</p>

                    <h3>3. Use License</h3>
                    <p>Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only.</p>

                    <h3>4. Disclaimer</h3>
                    <p>The materials on this website are provided on an 'as is' basis. Aqib Mustafa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
