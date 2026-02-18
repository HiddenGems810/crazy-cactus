"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="vip-club" className="py-24 px-6 bg-matte-black">
            <div className="container mx-auto">
                <div className="glass-card p-12 md:p-24 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-electric-yellow/10 blur-[80px] -translate-x-1/2 -translate-y-1/2" />

                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl md:text-7xl leading-none">BECOME A <br /><span className="text-electric-yellow">VIP</span></h2>
                        <p className="text-white/60 font-sans text-lg max-w-md">
                            Unlock exclusive rewards, secret menu items, and priority reservations. The ultimate Crazy Cactus experience starts here.
                        </p>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 px-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Ger'Quia Abner"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-electric-yellow outline-none transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 px-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="hello@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-electric-yellow outline-none transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2 mt-8 animate-pulse hover:animate-none"
                            >
                                LEVEL UP MY TACOS
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
