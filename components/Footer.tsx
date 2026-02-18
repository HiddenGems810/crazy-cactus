"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-matte-black pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-electric-yellow/20 to-transparent" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-yellow/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column (Span 4) */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="relative w-40 h-40 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/Crazy Cactus Mexican Restaurant Logo All White.png"
                                    alt="Crazy Cactus Logo"
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all"
                                />
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm font-sans leading-relaxed max-w-xs">
                            Elevating Mexican tradition with modern culinary techniques and a premium atmosphere in the heart of Olive Branch.
                        </p>

                        {/* Social Links (Custom SVGs) */}
                        <div className="flex gap-4">
                            <a
                                aria-label="Like on Facebook, opens in a new window"
                                href="https://www.facebook.com/CrazyCactusOliveBranch/"
                                rel="noopener"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-electric-yellow border border-white/5 hover:border-white/20 transition-all duration-300 group"
                            >
                                <svg viewBox="0 0 16 16" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" color="inherit" fontSize="inherit" aria-hidden="true">
                                    <path d="M12 1.333h-2a3.333 3.333 0 00-3.333 3.334v2h-2v2.667h2v5.333h2.666V9.334h2L12 6.667H9.333v-2A.667.667 0 0110 4h2V1.333z" stroke="currentColor"></path>
                                </svg>
                            </a>
                            <a
                                aria-label="Find on Instagram, opens in a new window"
                                href="https://www.instagram.com/thecrazycactusob/"
                                rel="noopener"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-electric-yellow border border-white/5 hover:border-white/20 transition-all duration-300 group"
                            >
                                <svg viewBox="0 0 16 16" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" color="inherit" fontSize="inherit" aria-hidden="true">
                                    <g clipPath="url(#instagram_svg__clip0_8_4533)" stroke="currentColor">
                                        <path d="M11.333 1.333H4.667a3.333 3.333 0 00-3.334 3.334v6.667a3.333 3.333 0 003.334 3.333h6.666a3.333 3.333 0 003.334-3.333V4.667a3.333 3.333 0 00-3.334-3.333z"></path>
                                        <path d="M10.667 7.58a2.667 2.667 0 11-5.276.783 2.667 2.667 0 015.276-.783zm1-3.247h.006"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="instagram_svg__clip0_8_4533"><path fill="currentColor" d="M0 0h16v16H0z"></path></clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation (Span 2) */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-white">Explore</h4>
                        <ul className="space-y-4 text-sm font-medium text-white/50">
                            <li><Link href="/" className="hover:text-electric-yellow transition-colors flex items-center gap-1 group"><span>Home</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/menu" className="hover:text-electric-yellow transition-colors flex items-center gap-1 group"><span>Our Menu</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/#vip-club" className="hover:text-electric-yellow transition-colors flex items-center gap-1 group"><span>Become A VIP</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                            <li><Link href="/reserve" className="hover:text-electric-yellow transition-colors flex items-center gap-1 group"><span>Reserve</span><ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                        </ul>
                    </div>

                    {/* Hours (Span 3) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-white">Opening Hours</h4>
                        <ul className="space-y-3 text-sm font-sans text-white/60">
                            <li className="flex justify-between items-center py-2 border-b border-white/5">
                                <span>Tue - Thu</span>
                                <span className="font-bold text-white">11AM - 9PM</span>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-white/5">
                                <span>Fri - Sat</span>
                                <span className="font-bold text-electric-yellow">11AM - 10PM</span>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b border-white/5">
                                <span>Sunday</span>
                                <span className="font-bold text-white">11AM - 9PM</span>
                            </li>
                            <li className="flex justify-between items-center py-2 text-white/40">
                                <span>Monday</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact (Span 3) */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-white">Plan Your Visit</h4>
                        <div className="space-y-4">
                            <a
                                href="https://maps.google.com/?q=7142+MS-305+SUITE+A,+Olive+Branch,+MS+38654"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="p-2 bg-black/40 rounded-lg text-electric-yellow group-hover:scale-110 transition-transform">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white mb-1">Olive Branch, MS</p>
                                    <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors">7142 MS-305 SUITE A,<br />Olive Branch, MS 38654</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4">
                                <a href="tel:6628928444" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-electric-yellow hover:text-black border border-white/10 hover:border-electric-yellow transition-all text-sm font-bold text-white group">
                                    <Phone className="w-4 h-4 text-electric-yellow group-hover:text-black transition-colors" />
                                    <span>Call Us</span>
                                </a>
                                <a href="mailto:info@crazycactus.com" className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-bold text-white group">
                                    <Mail className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                                    <span>Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} Crazy Cactus MS. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/30 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/30 hover:text-white transition-colors">Terms of Service</Link>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
                            Built by <a href="https://tagdesigns.com" target="_blank" rel="noopener" className="text-white/60 hover:text-electric-yellow transition-colors">TAGDesigns</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
