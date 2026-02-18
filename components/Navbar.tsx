"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ShoppingCart, Menu, X } from "lucide-react";
import VIPModal from "@/components/VIPModal";
import { useCartStore } from "@/lib/store/useCartStore";

export default function Navbar() {
    const { toggleCart, items } = useCartStore();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVIPModalOpen, setIsVIPModalOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Our Menu", href: "/menu" },
        { name: "Events", href: "/events" },
        { name: "Become A VIP", href: "/#vip-club" },
        { name: "Reserve", href: "/reserve" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === "/#vip-club" && pathname !== "/") {
            e.preventDefault();
            setIsVIPModalOpen(true);
            setIsMobileMenuOpen(false);
        } else {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-normal px-6 py-4",
                    isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent"
                )}
                aria-label="Main Navigation"
            >
                <div className="container mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-3 group"
                        aria-label="Crazy Cactus Home"
                    >
                        <div className="relative w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/Crazy Cactus Mexican Restaurant Logo All White.png"
                                alt="Crazy Cactus Logo"
                                width={120}
                                height={120}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </div>
                        <span className="sr-only">CRAZY CACTUS</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white hover:text-electric-yellow transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/dashboard"
                            className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all bg-white/5 px-3 py-1 rounded-full border border-white/5"
                        >
                            Portal
                        </Link>
                        {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && (
                            <>
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <button
                                            className="hidden md:block text-[10px] font-bold px-4 py-2 rounded-full border border-white/20 hover:border-white transition-all"
                                            aria-label="Sign in to your account"
                                        >
                                            SIGN IN
                                        </button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </>
                        )}

                        <button
                            onClick={toggleCart}
                            className="relative p-3 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
                            aria-label="View Shopping Cart"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {items.length > 0 && (
                                <span className="absolute top-2 right-2 w-4 h-4 bg-electric-yellow text-black text-[10px] font-black rounded-full flex items-center justify-center ring-2 ring-black">
                                    {items.length}
                                </span>
                            )}
                        </button>

                        <button
                            className="md:hidden p-3 text-white hover:bg-white/5 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden",
                        isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-lg font-bold uppercase tracking-widest text-white/80 hover:text-electric-yellow transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            <VIPModal isOpen={isVIPModalOpen} onClose={() => setIsVIPModalOpen(false)} />
        </>
    );
}
