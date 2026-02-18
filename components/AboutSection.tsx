"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="relative py-16 md:py-32 overflow-hidden bg-matte-black">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            {/* Ambient Glow */}
            <div className="absolute top-1/2 -left-20 w-96 h-96 bg-electric-yellow/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Graphic/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:flex items-center justify-center p-12"
                    >
                        {/* Rotating ring effect */}
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                        <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

                        {/* Central Branded Graphic (Logo or Icon) */}
                        <div className="relative w-full aspect-square max-w-sm bg-gradient-to-tr from-white/10 to-transparent rounded-full backdrop-blur-3xl flex items-center justify-center border border-white/10 shadow-2xl">
                            {/* Placeholder for a Cactus Icon or Logo Mark */}
                            <span className="text-9xl opacity-20 select-none">🌵</span>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="glass-card p-10 md:p-14 relative overflow-hidden group">
                            {/* Decorative accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-lime-green/10 blur-[60px] rounded-full transition-all group-hover:bg-lime-green/20" />

                            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white leading-[0.9] mb-8">
                                FAMILY<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-yellow to-lime-green">TRADITION</span>
                            </h2>

                            <div className="space-y-6 text-lg text-white/70 font-sans leading-relaxed">
                                <p>
                                    Crazy Cactus has been serving the Olive Branch, MS community for years, becoming a beloved local gem.
                                    As a family-owned restaurant, we take pride in delivering the bold flavors of Southwestern and
                                    Mexican cuisine with the personal touch only a family can provide.
                                </p>

                                <div className="h-px w-20 bg-white/20 my-6" />

                                <p className="text-sm md:text-base">
                                    Whether you're joining us for a casual lunch, a weekend celebration, or a night of karaoke, we're here
                                    to make every visit special.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="pt-10">
                                <a
                                    href="https://www.toasttab.com/crazy-cactus-olive-branch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-electric-yellow/50 rounded-full transition-all duration-300 group/btn"
                                >
                                    <span className="font-bold tracking-widest uppercase text-sm text-electric-yellow group-hover/btn:text-white transition-colors">Order Online</span>
                                    <div className="w-8 h-8 rounded-full bg-electric-yellow text-black flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
