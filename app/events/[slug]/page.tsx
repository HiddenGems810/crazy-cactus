"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, Heart, Clock, MapPin } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { events } from "@/lib/events";

export default function EventDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    // Find event data
    const event = events.find(e => e.slug === slug);

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-matte-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Event Not Found</h1>
                    <Link href="/events" className="text-electric-yellow hover:underline">Return to Events</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-matte-black min-h-screen pt-32 pb-24 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* Back Button & Header Actions */}
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-white/50 hover:text-white uppercase text-xs font-bold tracking-widest transition-colors"
                    >
                        <ArrowLeft className="w-4 h4" /> Back
                    </button>

                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all">
                        <Heart className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Floating Badge */}
                        <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl">
                            <span className={`text-sm font-black uppercase tracking-widest ${event.color}`}>
                                {event.time}
                            </span>
                        </div>
                    </motion.div>

                    {/* Right Column - Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div>
                            <span className="text-electric-yellow font-bold tracking-[0.2em] text-sm uppercase mb-2 block">
                                Event Details
                            </span>
                            <h1 className="text-5xl md:text-6xl font-display font-black leading-none mb-4">
                                {event.title}
                            </h1>
                            <div className="flex items-center gap-6 text-white/50 text-sm font-medium">
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-electric-yellow" />
                                    {event.time}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-electric-yellow" />
                                    Crazy Cactus
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6 text-lg text-white/70 font-sans leading-relaxed border-y border-white/10 py-8">
                            <p>{event.description}</p>

                            {event.details && (
                                <ul className="space-y-3">
                                    {event.details.schedule && (
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-electric-yellow" />
                                            Schedule: <span className="text-white">{event.details.schedule}</span>
                                        </li>
                                    )}
                                    {/* Render Pricing if exists */}
                                    {event.details.pricing?.map((price, idx) => (
                                        <li key={idx} className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0">
                                            <span>{price.item}</span>
                                            <span className={`font-bold ${event.color}`}>{price.price}</span>
                                        </li>
                                    ))}
                                    {/* Render Highlights if exists */}
                                    {event.details.highlights?.map((highlight, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-electric-yellow" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <button className="btn-primary w-full flex items-center justify-center gap-2 group">
                                <Calendar className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                ADD TO CALENDAR
                            </button>
                            <button className="px-8 py-4 border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold rounded-full transition-all duration-200 flex items-center justify-center gap-2">
                                <Share2 className="w-4 h-4" />
                                SHARE EVENT
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
