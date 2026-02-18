"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { events } from "@/lib/events";

export default function EventsPage() {
    return (
        <main className="bg-matte-black min-h-screen pt-24 pb-24">
            {/* Header */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-background-mexican-restaurant-v2.jpg"
                        alt="Events Background"
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
                            UPCOMING <span className="text-electric-yellow neon-text">EVENTS</span>
                        </h1>
                        <p className="text-white/80 font-sans text-lg max-w-2xl mx-auto drop-shadow-md">
                            Join us for live music, special offers, and unforgettable nights.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="container mx-auto px-6 -mt-20 relative z-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group relative overflow-hidden rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                                    <span className={`text-xs font-bold uppercase tracking-widest ${event.color}`}>
                                        {event.time}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 relative">
                                <h3 className="text-3xl font-display font-black mb-2">{event.title}</h3>
                                <p className="text-white/60 mb-6 line-clamp-2">{event.description}</p>

                                <Link
                                    href={`/events/${event.slug}`}
                                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-electric-yellow transition-colors"
                                >
                                    View Details <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
