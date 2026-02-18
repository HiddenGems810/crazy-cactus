"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
    const stats = [
        { label: "Years in Olive Branch", value: "15+" },
        { label: "5-Star Reviews", value: "1,000+" },
        { label: "Voted Best Margaritas", value: "2024" },
    ];

    return (
        <div className="bg-electric-yellow py-8 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center md:text-left flex flex-col md:flex-row items-center gap-2"
                        >
                            <span className="text-4xl md:text-5xl font-display font-black text-black">
                                {stat.value}
                            </span>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-black/60 max-w-[120px] leading-tight">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
