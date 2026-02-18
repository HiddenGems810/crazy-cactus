"use client";

import { motion } from "framer-motion";

const events = [
    {
        title: "KARAOKE NIGHTS",
        time: "EVERY THURSDAY 8PM",
        description: "Grab the mic and show off your pipes. Drink specials all night.",
        color: "rgba(13, 242, 13, 1)", // Lime Green
    },
    {
        title: "HAPPY HOUR",
        time: "MON - FRI 3PM - 6PM",
        description: "Half-priced margs and appetizers at the bar.",
        color: "rgba(242, 223, 13, 1)", // Electric Yellow
    },
    {
        title: "LIVE TEQUILA TASTING",
        time: "EVERY LAST FRIDAY",
        description: "Explore premium reposados with our master mixologist.",
        color: "rgba(13, 242, 13, 1)",
    },
];

export default function EventsCarousel() {
    return (
        <section id="events" className="py-24 px-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0A0A0A] to-black relative overflow-hidden">
            {/* Visual Glitch/Neon Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-green/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-yellow/5 blur-[120px] rounded-full" />

            <div className="container mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl mb-16 neon-text">AFTER <span className="italic">DARK</span></h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`p-8 border border-white/10 rounded-3xl bg-black/40 backdrop-blur-sm group hover:border-white/20 transition-all ${(event.title.includes("KARAOKE") || event.title.includes("HAPPY HOUR"))
                                    ? "border-t-[#39FF14] border-t-2 shadow-[0_-10px_40px_rgba(57,255,20,0.1)]"
                                    : ""
                                }`}
                        >
                            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block" style={{ color: event.color }}>
                                {event.time}
                            </span>
                            <h3 className="text-3xl md:text-4xl mb-6 font-display font-black leading-none group-hover:italic transition-all">
                                {event.title}
                            </h3>
                            <p className="text-white/50 font-sans text-sm mb-8 max-w-[260px]">
                                {event.description}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-white/10 group-hover:w-20 group-hover:bg-electric-yellow transition-all" />
                                <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">Details</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
