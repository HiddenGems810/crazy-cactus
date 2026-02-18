"use client";

import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store/useCartStore";
import { ShoppingBag, ChevronLeft, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
    const { items, updateQuantity, removeItem } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const subtotal = items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return acc + price * item.quantity;
    }, 0);

    if (!isMounted) return null;

    if (items.length === 0) {
        return (
            <main className="min-h-screen pt-32 pb-12 bg-matte-black">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-md mx-auto"
                    >
                        <ShoppingBag className="w-20 h-20 mx-auto mb-8 text-white/10" />
                        <h1 className="text-4xl font-display font-black uppercase tracking-widest text-white mb-4">
                            Your basket is empty
                        </h1>
                        <p className="text-white/40 mb-12">
                            Looks like you haven't added any of our delicious Mexican specialties to your order yet.
                        </p>
                        <Link
                            href="/menu"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-electric-yellow text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(242,223,13,0.3)]"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            Return to Menu
                        </Link>
                    </motion.div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-24 bg-matte-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Items List */}
                    <div className="flex-grow">
                        <div className="flex items-center justify-between mb-12">
                            <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-white">
                                Review <span className="text-electric-yellow">Order</span>
                            </h1>
                            <Link href="/menu" className="hidden md:flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase text-xs font-black tracking-widest">
                                <Plus className="w-4 h-4" />
                                Add more items
                            </Link>
                        </div>

                        <div className="space-y-6">
                            {items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    className="p-6 md:p-8 bg-white/5 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center gap-8 group"
                                >
                                    <div className="flex-grow text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-electric-yellow transition-colors">{item.name}</h3>
                                        <p className="text-white/40 max-w-md mx-auto md:mx-0 font-medium">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-8 md:gap-12 w-full md:w-auto justify-between md:justify-end">
                                        <div className="flex items-center gap-4 bg-black/40 rounded-full px-4 py-2 border border-white/5">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 hover:text-electric-yellow transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="text-lg font-black min-w-[30px] text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 hover:text-electric-yellow transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <div className="text-right min-w-[100px]">
                                            <div className="text-2xl font-black text-white mb-1">
                                                ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-white/20 hover:text-red-500 transition-colors uppercase text-[10px] font-black tracking-widest flex items-center gap-1 justify-end ml-auto"
                                            >
                                                <Trash2 className="w-3 h-3" />
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="w-full lg:w-[400px] shrink-0">
                        <div className="sticky top-32 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
                            <h2 className="text-2xl font-display font-black uppercase tracking-widest text-white mb-8">Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between">
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                                    <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Tax (9.75%)</span>
                                    <span className="text-white font-bold">${(subtotal * 0.0975).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Delivery Fee</span>
                                    <span className="text-electric-yellow font-bold uppercase tracking-widest text-xs">Free</span>
                                </div>
                                <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-end">
                                    <span className="text-white font-black uppercase tracking-[0.2em]">Total</span>
                                    <span className="text-4xl font-black text-electric-yellow font-display leading-none">
                                        ${(subtotal * 1.0975).toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <button className="w-full py-5 bg-electric-yellow text-black font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(242,223,13,0.3)] flex items-center justify-center gap-3">
                                Complete Order
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                    <div className="w-10 h-10 rounded-lg bg-electric-yellow/10 flex items-center justify-center">
                                        <Plus className="w-5 h-5 text-electric-yellow" />
                                    </div>
                                    <p className="text-[10px] text-white/50 leading-tight">
                                        Add special instructions or allergy information at the next step.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
