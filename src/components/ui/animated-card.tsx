"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const AnimatedCard = ({ children, className, delay = 0 }: AnimatedCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-zinc-50 p-8 border border-zinc-100 hover:border-rose-600/50 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-rose-500/5",
                className
            )}
        >
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};
