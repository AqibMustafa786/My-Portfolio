"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />
            <main className="pt-32 pb-20 container mx-auto px-4 relative z-10 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p>Last updated: February 17, 2026</p>
                    <h3>1. Information Collection</h3>
                    <p>I do not collect any personal data from visitors to this portfolio website, except when you voluntarily provide it through the contact form (Name, Email, Message).</p>

                    <h3>2. Use of Information</h3>
                    <p>Any information you provide is used solely to respond to your inquiries or business requests. I do not share, sell, or disclose your information to third parties.</p>

                    <h3>3. Cookies</h3>
                    <p>This website may use local storage or cookies solely for the purpose of maintaining your theme preference (Dark/Light mode). No tracking cookies are used.</p>

                    <h3>4. Third-Party Links</h3>
                    <p>This website contains links to other sites (e.g., GitHub, LinkedIn, Fiverr). Please be aware that I am not responsible for the content or privacy practices of such other sites.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
