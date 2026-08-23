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
                "group relative overflow-hidden rounded-2xl bg-card p-7 border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl",
                className
            )}
        >
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};
