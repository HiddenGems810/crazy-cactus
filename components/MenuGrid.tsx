"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/store/useCartStore";

const dishes = [
    {
        id: 1,
        title: "Crazy Nachos",
        description: "Seasoned beef and chicken with refried beans, lettuce, tomatoes, and sour cream on crispy tortilla chips.",
        price: "$16.89",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1935&auto=format&fit=crop",
        badge: "Fan Favorite"
    },
    {
        id: 2,
        title: "Cactus Quesadilla",
        description: "Tender chunks of grilled pork with signature cactus strips and melted cheese in a flour tortilla.",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=2070&auto=format&fit=crop",
        badge: "Spicy"
    },
    {
        id: 3,
        title: "Pollo Santa Fe",
        description: "Marinated chicken breast grilled atop fresh vegetables, served with rice, beans, and salad.",
        price: "$18.18",
        image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Crazy Fiesta Taquitos",
        description: "Your choice of chicken or beef rolled taquitos, drizzled with three spicy sauces and Monterey Jack.",
        price: "$24.69",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function MenuGrid() {
    return (
        <section id="the-menu" className="py-24 px-6 bg-matte-black selection:bg-electric-yellow selection:text-black">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
                            EXQUISITE <span className="text-electric-yellow font-display font-black">FAVORITES</span>
                        </h2>
                        <p className="text-white/50 font-sans text-lg leading-relaxed">
                            Crafted with precision, served with passion. Our signature dishes redefine traditional Mexican flavors for the modern palate.
                        </p>
                    </div>
                    <Link
                        href="/menu"
                        className="text-sm font-black uppercase tracking-[0.2em] border-b-2 border-electric-yellow/30 pb-2 hover:border-electric-yellow hover:text-electric-yellow transition-all duration-normal"
                        aria-label="View our full culinary menu"
                    >
                        EXPLORE FULL MENU
                    </Link>
                </div>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-10 md:pb-0 md:overflow-visible scrollbar-hide">
                    {dishes.map((dish, idx) => {
                        const { addItem, items } = useCartStore();
                        const cartItem = items.find(i => i.id === `fav-${dish.id}`);
                        const quantity = cartItem?.quantity || 0;

                        return (
                            <motion.div
                                key={dish.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="group relative glass-card overflow-hidden hover:border-electric-yellow/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:scale-[1.02] transition-all duration-300 min-w-[85vw] snap-center md:min-w-0"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden bg-white/5">
                                    <Image
                                        src={dish.image}
                                        alt={dish.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                                    {dish.badge && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-electric-yellow text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                            {dish.badge}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 relative z-10">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-black leading-tight tracking-tight text-white group-hover:text-electric-yellow transition-colors text-ellipsis overflow-hidden">
                                            {dish.title}
                                        </h3>
                                        <span className="text-lg font-black text-electric-yellow tabular-nums">
                                            {dish.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-white/60 mb-8 font-sans leading-relaxed line-clamp-2 min-h-[40px] group-hover:text-white/80 transition-colors">
                                        {dish.description}
                                    </p>

                                    <button
                                        onClick={() => addItem({
                                            id: `fav-${dish.id}`,
                                            name: dish.title,
                                            price: dish.price,
                                            quantity: 1,
                                            description: dish.description
                                        })}
                                        className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl border text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 min-h-[48px] active:scale-95 ${quantity > 0
                                                ? "bg-electric-yellow text-black border-electric-yellow shadow-[0_0_15px_rgba(242,223,13,0.2)]"
                                                : "bg-white/10 border-white/10 text-white hover:bg-white/20 hover:border-white/30"
                                            }`}
                                        aria-label={`Add ${dish.title} to your order`}
                                    >
                                        <Plus className={`w-4 h-4 transition-transform duration-300 ${quantity > 0 ? "rotate-90" : ""}`} />
                                        {quantity > 0 ? `In Cart (${quantity})` : "Quick Add"}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
