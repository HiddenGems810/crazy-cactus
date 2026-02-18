"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Play, Crown, Calendar, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import CountUp from "react-countup";

export default function Hero() {
    // Dual-video state for seamless looping (Crossfade)
    const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    const CROSSFADE_DURATION = 2000; // 2000ms overlap for maximum smoothness

    const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const video = e.currentTarget;
        if (!video.duration) return;

        const timeLeft = video.duration - video.currentTime;
        const transitionTime = CROSSFADE_DURATION / 1000;

        // Trigger transition if within the overlap window and not already transitioning
        if (timeLeft < transitionTime && !isTransitioning) {
            setIsTransitioning(true);
            const nextVideoRef = activeVideo === 1 ? video2Ref : video1Ref;
            const nextVideo = nextVideoRef.current;

            if (nextVideo) {
                nextVideo.currentTime = 0;
                nextVideo.play().catch(console.error);
                setActiveVideo(activeVideo === 1 ? 2 : 1);
            }

            // Reset transition lock after the uniform duration
            setTimeout(() => {
                setIsTransitioning(false);
                // Pause the previous video to save resources
                if (video) video.pause();
            }, CROSSFADE_DURATION);
        }
    };

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-matte-black text-white">

            {/* 1. Background Video (Full Cover) with Seamless Crossfade */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute inset-0 bg-black/40 z-20" /> {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-black/60 z-20" /> {/* Vertical Vignette */}

                {/* Video 1 */}
                <video
                    ref={video1Ref}
                    autoPlay
                    muted
                    playsInline
                    onTimeUpdate={activeVideo === 1 ? handleTimeUpdate : undefined}
                    className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-[2000ms] ease-in-out ${activeVideo === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <source src="/Inematic_hero_animation_202602181224_ttjkx.mp4" type="video/mp4" />
                </video>

                {/* Video 2 */}
                <video
                    ref={video2Ref}
                    muted
                    playsInline
                    onTimeUpdate={activeVideo === 2 ? handleTimeUpdate : undefined}
                    className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-[2000ms] ease-in-out ${activeVideo === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <source src="/Inematic_hero_animation_202602181224_ttjkx.mp4" type="video/mp4" />
                </video>
            </div>

            {/* 2. Main Content Container */}
            <div className="container relative z-30 mx-auto px-6 h-full min-h-[100dvh] flex flex-col justify-center items-center text-center pt-[80px] pb-24">

                {/* Typography & CTAs */}
                <div className="space-y-8 max-w-4xl mx-auto flex flex-col items-center">

                    {/* Pre-header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 justify-center mb-2"
                    >
                        <span className="h-px w-8 bg-electric-yellow"></span>
                        <span className="text-electric-yellow font-black uppercase tracking-[0.2em] text-sm md:text-base flex items-center gap-2">
                            <Crown className="w-4 h-4" /> Voted Best Margaritas in Olive Branch
                        </span>
                        <span className="h-px w-8 bg-electric-yellow"></span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tight leading-[1] text-white"
                    >
                        CRAVE THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                            EXTRAORDINARY.
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-md"
                    >
                        Authentic Mexican flavors meet a modern dining experience. Fresh ingredients, bold spices, and spirits that lift your soul.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 pt-8"
                    >
                        <Link
                            href="https://www.toasttab.com/crazy-cactus-olive-branch"
                            target="_blank"
                            className="btn-primary flex items-center justify-center gap-2 px-10 py-5 bg-electric-yellow text-black font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:scale-105"
                        >
                            Order Online
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <Link
                            href="/#reserve"
                            className="flex items-center justify-center gap-2 px-10 py-5 border-2 border-white/50 text-white font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-sm"
                        >
                            Book a Table
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 mix-blend-difference"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>

        </section>
    );
}
