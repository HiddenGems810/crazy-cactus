"use client";

import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function MobileStickyNav() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 800px)
            setIsVisible(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
                >
                    <div className="glass-card flex items-center justify-between p-2 pl-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">

                        {/* Call Button (Ghost) */}
                        <a
                            href="tel:6628928444"
                            className="flex items-center gap-2 text-white/80 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Call Us</span>
                        </a>

                        {/* Divider */}
                        <div className="h-6 w-px bg-white/10 mx-2" />

                        {/* Order Button (Primary) */}
                        <Link
                            href="https://www.toasttab.com/crazy-cactus-olive-branch"
                            target="_blank"
                            className="flex items-center gap-2 bg-electric-yellow text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-xs shadow-[0_0_15px_rgba(242,223,13,0.3)]"
                        >
                            Order Now
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
