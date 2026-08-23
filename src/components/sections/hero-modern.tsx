"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

interface HeroModernProps {
    greeting?: string;
}

export const HeroModern = ({ greeting }: HeroModernProps) => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Subtle background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center lg:text-left py-12"
                >
                    {greeting && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-primary font-medium text-sm mb-6 block tracking-wide"
                        >
                            {greeting}
                        </motion.p>
                    )}

                    <p className="text-muted-foreground font-medium text-sm mb-4 tracking-widest uppercase">Hello.</p>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground mb-6">
                        I&apos;m <span className="text-primary">Aqib Mustafa</span>
                        <span className="sr-only"> – Software Engineer & Web App Developer</span>
                    </h1>

                    <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-muted-foreground leading-snug">
                        Flutter Developer & Full Stack Web Engineer
                    </h2>

                    <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-4 border-primary pl-6">
                        Crafting high-performance digital experiences through advanced software engineering and modern design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="#projects"
                            className="h-14 px-10 bg-primary rounded-full font-semibold text-sm text-primary-foreground flex items-center justify-center gap-3 hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/30 active:scale-95"
                        >
                            Explore Work <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Aqib_Mustafa_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 px-10 border border-border rounded-full font-semibold text-sm text-foreground flex items-center justify-center gap-3 hover:bg-card transition-all duration-300 active:scale-95"
                        >
                            Download CV <Download className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Right side decorative element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative hidden lg:flex items-center justify-center"
                >
                    <div className="relative w-[380px] h-[380px]">
                        {/* Outer ring */}
                        <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                        {/* Middle ring */}
                        <div className="absolute inset-8 border border-border rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                        {/* Center badge */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-40 h-40 rounded-full bg-card border border-border flex flex-col items-center justify-center shadow-2xl gap-1">
                                <span className="text-4xl font-bold text-primary">3+</span>
                                <span className="text-xs text-muted-foreground font-medium tracking-wider">Years Exp.</span>
                            </div>
                        </div>
                        {/* Floating tech dots */}
                        {['Flutter', 'Next.js', 'Firebase', 'AppSheet'].map((tech, i) => {
                            const angle = (i / 4) * 2 * Math.PI - Math.PI / 4;
                            const r = 170;
                            const x = 190 + r * Math.cos(angle);
                            const y = 190 + r * Math.sin(angle);
                            return (
                                <div
                                    key={tech}
                                    className="absolute px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground shadow-lg"
                                    style={{ left: x - 35, top: y - 14 }}
                                >
                                    {tech}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Skill ticker */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card/50 py-4 overflow-hidden">
                <div className="flex gap-16 animate-marquee whitespace-nowrap">
                    {['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'Next.js', 'Flutter', 'Firebase', 'AppSheet', 'React', 'Node.js', 'Tailwind CSS', 'Git'].map(tech => (
                        <span key={tech} className="text-xs font-medium text-muted-foreground tracking-widest uppercase">{tech}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};
