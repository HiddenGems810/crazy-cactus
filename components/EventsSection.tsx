"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar as CalendarIcon, List as ListIcon, Clock } from "lucide-react";
import { events } from "@/lib/events";
import { ArrowUpRight } from "lucide-react";

const DAYS_IN_MONTH = 28;
const START_DAY_OFFSET = 0; // Feb 1 2026 is a Sunday (0)

export default function EventsSection() {
    const [view, setView] = useState<"list" | "calendar">("list");

    return (
        <section id="events" className="py-32 px-6 bg-deep-charcoal relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-green/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-yellow/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">

                {/* Header & Controls */}
                <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8 border-b border-white/10 pb-8">
                    <div className="space-y-4 text-center lg:text-left w-full lg:w-auto">
                        <span className="text-electric-yellow font-bold tracking-[0.4em] text-sm uppercase">After Dark</span>
                        <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-none">
                            UPCOMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">EVENTS</span>
                        </h2>
                    </div>

                    {/* View Toggle */}
                    <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex relative w-fit mx-auto lg:mx-0">
                        {/* Sliding Background */}
                        <motion.div
                            className="absolute top-1.5 bottom-1.5 bg-electric-yellow rounded-full z-0"
                            initial={false}
                            animate={{
                                x: view === "list" ? 0 : "100%",
                                width: "50%"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />

                        <button
                            onClick={() => setView("list")}
                            className={`relative z-10 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-colors ${view === "list" ? "text-black" : "text-white/50 hover:text-white"
                                }`}
                        >
                            <ListIcon className="w-3.5 h-3.5" /> List
                        </button>
                        <button
                            onClick={() => setView("calendar")}
                            className={`relative z-10 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-colors ${view === "calendar" ? "text-black" : "text-white/50 hover:text-white"
                                }`}
                        >
                            <CalendarIcon className="w-3.5 h-3.5" /> Calendar
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {view === "list" ? (
                        <ListView key="list" />
                    ) : (
                        <CalendarView key="calendar" />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function ListView() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
            {events.map((event, idx) => (
                <Link
                    key={event.id}
                    href={`/events/${event.slug}`}
                    className="block"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1 h-full flex flex-col"
                    >
                        {/* Image Section */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

                            {/* Date Badge (Mocked based on current date) */}
                            <div className="absolute bottom-4 left-4 bg-red-800 text-white p-2 min-w-[50px] text-center rounded-sm">
                                <div className="text-[10px] font-bold uppercase leading-tight">FEB</div>
                                <div className="text-xl font-black leading-tight">{18 + idx}</div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex-grow">
                            <div className="flex justify-between items-center mb-4">
                                <div className={`p-2 rounded-lg bg-white/5 ${event.color}`}>
                                    <event.icon className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase bg-white/5 px-3 py-1 rounded-full">
                                    {event.time}
                                </span>
                            </div>

                            <h3 className="text-3xl font-display font-black text-white mb-3 group-hover:text-electric-yellow transition-colors">
                                {event.title}
                            </h3>

                            <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-2">
                                {event.description}
                            </p>

                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-electric-yellow">
                                <span>Learn More</span>
                                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>

                        {/* Glow indicator */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${event.color}`} />
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    );
}

function CalendarView() {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="w-full"
        >
            <div className="bg-black/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div>
                        <h3 className="text-2xl font-display font-bold text-white">February 2026</h3>
                        <p className="text-white/40 text-sm">Olive Branch, MS</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-white/40 mr-4">
                            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-lime-green"></span> Karaoke</span>
                            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-electric-yellow"></span> Happy Hour</span>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-7 border-collapse">
                    {/* Days Header */}
                    {weekDays.map(day => (
                        <div key={day} className="py-4 text-center border-b border-white/5 bg-white/5">
                            <span className="text-white/40 font-bold uppercase text-[10px] tracking-[0.2em]">{day}</span>
                        </div>
                    ))}

                    {/* Days Cells */}
                    {Array.from({ length: DAYS_IN_MONTH }).map((_, i) => {
                        const dayNum = i + 1;
                        // Mock "Today" as Feb 18th based on prompt context
                        const isToday = dayNum === 18;
                        const dayOfWeek = (i + START_DAY_OFFSET) % 7;

                        // Determine events for this day
                        const hasKaraoke = dayOfWeek === 4 || dayOfWeek === 6;
                        const hasHappyHour = true; // Every day for this visual

                        return (
                            <div
                                key={i}
                                className={`
                                    min-h-[80px] md:min-h-[140px] p-2 md:p-4 border-r border-b border-white/5 relative group transition-colors duration-200
                                    ${isToday ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'}
                                `}
                            >
                                <div className="flex justify-between items-start mb-2 md:mb-3">
                                    <span className={`
                                        text-xs md:text-sm font-bold w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full
                                        ${isToday ? 'bg-electric-yellow text-black shadow-[0_0_10px_rgba(242,223,13,0.5)]' : 'text-white/40 group-hover:text-white'}
                                    `}>
                                        {dayNum}
                                    </span>
                                </div>

                                <div className="space-y-1 md:space-y-1.5 flex flex-wrap content-start gap-1 md:block">
                                    {hasKaraoke && (
                                        <>
                                            {/* Mobile: Dot */}
                                            <div className="md:hidden w-2 h-2 rounded-full bg-lime-green shadow-[0_0_5px_#39FF14]" />

                                            {/* Desktop: Pill */}
                                            <div className="hidden md:flex group/evt cursor-pointer bg-lime-green/10 border border-lime-green/20 rounded px-2 py-1 items-center gap-1.5 hover:border-lime-green/50 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-lime-green shadow-[0_0_5px_#39FF14]" />
                                                <span className="text-[9px] font-bold text-lime-green/80 uppercase truncate tracking-wide">Karaoke</span>
                                            </div>
                                        </>
                                    )}
                                    {hasHappyHour && (
                                        <>
                                            {/* Mobile: Dot */}
                                            <div className="md:hidden w-2 h-2 rounded-full bg-electric-yellow shadow-[0_0_5px_#F2DF0D]" />

                                            {/* Desktop: Pill */}
                                            <div className="hidden md:flex group/evt cursor-pointer bg-electric-yellow/10 border border-electric-yellow/20 rounded px-2 py-1 items-center gap-1.5 hover:border-electric-yellow/50 transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-electric-yellow shadow-[0_0_5px_#F2DF0D]" />
                                                <span className="text-[9px] font-bold text-electric-yellow/80 uppercase truncate tracking-wide">Happy Hour</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
