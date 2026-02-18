"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ReservePage() {
    const [partySize, setPartySize] = useState(2);

    return (
        <main className="bg-matte-black min-h-screen pt-24 pb-24">
            {/* Background Texture */}
            <div className="fixed inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />

            {/* Page Header */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-background-mexican-restaurant-v2.jpg"
                        alt="Restaurant Ambiance"
                        fill
                        className="object-cover opacity-30 blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-matte-black z-10" />
                </div>

                <div className="container relative z-20 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-4 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            RESERVE A <span className="text-electric-yellow neon-text">TABLE</span>
                        </h1>
                        <p className="text-white/80 font-sans text-lg max-w-2xl mx-auto drop-shadow-md">
                            Secure your spot for an unforgettable evening of authentic flavors and cactus vibes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Reservation Form Section */}
            <section className="container mx-auto px-6 -mt-20 relative z-30">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="glass-card max-w-4xl mx-auto p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#111]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Left Column: Details */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Reservation Details</h3>
                                <p className="text-white/40 text-sm">Tell us when you're coming.</p>
                            </div>

                            <div className="space-y-6">
                                {/* Date Picker Mockup */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                                        <Calendar className="w-3 h-3 text-electric-yellow" />
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electric-yellow outline-none transition-colors text-white scheme-dark"
                                    />
                                </div>

                                {/* Time Picker Mockup */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                                        <Clock className="w-3 h-3 text-electric-yellow" />
                                        Time
                                    </label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electric-yellow outline-none transition-colors text-white appearance-none cursor-pointer">
                                        <option>5:00 PM</option>
                                        <option>5:30 PM</option>
                                        <option>6:00 PM</option>
                                        <option>6:30 PM</option>
                                        <option>7:00 PM</option>
                                        <option>7:30 PM</option>
                                        <option>8:00 PM</option>
                                    </select>
                                </div>

                                {/* Party Size Slier/Select */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                                        <User className="w-3 h-3 text-electric-yellow" />
                                        Party Size
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setPartySize(Math.max(1, partySize - 1))}
                                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="text-2xl font-black w-8 text-center">{partySize}</span>
                                        <button
                                            onClick={() => setPartySize(Math.min(20, partySize + 1))}
                                            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact & Confirm */}
                        <div className="space-y-8 md:pl-12 md:border-l border-white/5">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
                                <p className="text-white/40 text-sm">Where should we send the confirmation?</p>
                            </div>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electric-yellow outline-none transition-colors text-white"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electric-yellow outline-none transition-colors text-white"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-electric-yellow outline-none transition-colors text-white"
                                />
                                <div className="pt-4">
                                    <button className="w-full btn-primary">
                                        CONFIRM RESERVATION
                                    </button>
                                    <p className="text-center text-white/30 text-xs mt-4">
                                        By booking, you agree to our Terms of Service.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
