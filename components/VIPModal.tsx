"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface VIPModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function VIPModal({ isOpen, onClose }: VIPModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-[101] p-4"
                    >
                        <div className="glass-card relative p-8 md:p-12 overflow-hidden border border-white/10 shadow-2xl">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors rounded-full hover:bg-white/10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Decor */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-electric-yellow/20 blur-[60px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                            <div className="space-y-6 text-center">
                                <h2 className="text-3xl md:text-4xl font-display font-black leading-none">
                                    BECOME A <span className="text-electric-yellow neon-text">VIP</span>
                                </h2>
                                <p className="text-white/60 text-sm md:text-base">
                                    Join the inner circle for secret menu items, priority reservations, and exclusive rewards.
                                </p>

                                <form className="space-y-4 text-left mt-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 px-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Ger'Quia Abner"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electric-yellow outline-none transition-colors text-white text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 px-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="hello@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electric-yellow outline-none transition-colors text-white text-sm"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full btn-primary flex items-center justify-center gap-2 mt-6"
                                    >
                                        JOIN THE CLUB
                                        <Send className="w-4 h-4" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
