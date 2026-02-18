"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/store/useCartStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartSidebar() {
    const { items, isOpen, setCartOpen, updateQuantity, removeItem, items: cartItems } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const subtotal = items.reduce((acc, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return acc + price * item.quantity;
    }, 0);

    if (!isMounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setCartOpen(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-matte-black border-l border-white/10 z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-matte-black/50 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-6 h-6 text-electric-yellow" />
                                <h2 className="text-xl font-display font-black uppercase tracking-widest text-white">Your Order</h2>
                                <span className="bg-electric-yellow text-black text-[10px] font-black px-2 py-0.5 rounded-full">
                                    {items.length}
                                </span>
                            </div>
                            <button
                                onClick={() => setCartOpen(false)}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/50 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-grow overflow-y-auto no-scrollbar p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                    <ShoppingBag className="w-16 h-16 mb-4" />
                                    <p className="text-lg font-bold uppercase tracking-widest">Your cart is empty</p>
                                    <p className="text-sm">Start adding some delicious Mexican food!</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group"
                                    >
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-white mb-1 group-hover:text-electric-yellow transition-colors">{item.name}</h3>
                                            <p className="text-xs text-white/40 mb-3 line-clamp-1">{item.description}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 bg-black/40 rounded-full px-2 py-1 border border-white/5">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:text-electric-yellow transition-colors"
                                                    >
                                                        <Minus className="w-3.5 h-3.5" />
                                                    </button>
                                                    <span className="text-xs font-black min-w-[20px] text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:text-electric-yellow transition-colors"
                                                    >
                                                        <Plus className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="font-black text-white">{item.price}</span>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-white/20 hover:text-red-500 transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-matte-black/80 backdrop-blur-xl">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/50 uppercase tracking-widest font-bold">Subtotal</span>
                                        <span className="text-white font-black">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/50 uppercase tracking-widest font-bold">Tax (9.75%)</span>
                                        <span className="text-white font-black">${(subtotal * 0.0975).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-xl border-t border-white/5 pt-4">
                                        <span className="text-white uppercase font-black tracking-widest">Total</span>
                                        <span className="text-electric-yellow font-black">${(subtotal * 1.0975).toFixed(2)}</span>
                                    </div>
                                </div>
                                <Link
                                    href="/cart"
                                    onClick={() => setCartOpen(false)}
                                    className="block w-full py-4 bg-electric-yellow text-black text-center font-black uppercase tracking-[0.2em] rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(242,223,13,0.3)]"
                                >
                                    Proceed to Checkout
                                </Link>
                                <p className="text-[10px] text-center text-white/30 mt-4 uppercase tracking-widest">
                                    Taxes calculated based on local Olive Branch rates
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
