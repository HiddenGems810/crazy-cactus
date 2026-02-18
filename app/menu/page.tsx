"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Download, Utensils, UtensilsCrossed, Flame, Coffee, Info, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Categorized Menu Data (Based on scraped authentic data)
const menuCategories = [
    {
        id: "starters",
        title: "Starters & Dips",
        icon: UtensilsCrossed,
        items: [
            { name: "Crazy Fiesta Taquitos", description: "Chicken or beef taquitos served with salad, shredded lettuce, spicy sauce, and Monterey Jack.", price: "$24.89" },
            { name: "Crazy Sampler", description: "A massive platter of our favorite appetizers to share.", price: "$23.50" },
            { name: "Crazy Fajitas", description: "The ultimate combination of beef, chicken, and shrimp.", price: "$20.79" },
            { name: "12 Hot Wings", description: "Traditional wings dipped in spicy buffalo sauce with celery and blue cheese.", price: "$19.50" },
            { name: "Trio Sampler", description: "Four shredded chicken flautas, four spicy wings, and four cheese quesadilla tips.", price: "$19.49" },
            { name: "Crazy Nachos", description: "Seasoned beef, chicken, refried beans, lettuce, tomatoes, and sour cream on crispy chips.", price: "$16.89" },
            { name: "Chorizo Queso Fundido", description: "Mexican sausage and cheese melted to perfection. Served with warm tortillas.", price: "$14.29" },
        ]
    },
    {
        id: "fajitas",
        title: "Sizzling Fajitas",
        icon: Flame,
        startMessage: "All fajitas served with rice, beans, tortillas, and salad.",
        items: [
            { name: "Shrimp Fajitas", description: "Succulent grilled shrimp sizzling on a cast iron skillet.", price: "$22.00" },
            { name: "Crazy Fajitas", description: "The ultimate combination of beef, chicken, and shrimp.", price: "$20.79" },
            { name: "Steak Fajitas", description: "Premium marinated steak strips grilled with peppers and onions.", price: "$19.50" },
            { name: "Chicken Fajitas", description: "Juicy grilled chicken breast with our signature light seasoning.", price: "$18.15" },
        ]
    },
    {
        id: "quesadillas",
        title: "Quesadillas",
        icon: Utensils,
        items: [
            { name: "Shrimp Quesadilla", description: "Melted cheese, succulent grilled shrimp, and grilled vegetables.", price: "$14.29" },
            { name: "Cactus Quesadilla", description: "Tender chunks of grilled pork, authentic cactus strips, and melted cheese.", price: "$12.99" },
            { name: "Fajita Quesadilla", description: "Stuffed with cheese, seasoned steak or chicken grilled with peppers and onions.", price: "$12.99" },
            { name: "Spinach Quesadilla", description: "Fresh spinach leaves and mushrooms with melted cheese.", price: "$11.89" },
        ]
    },
    {
        id: "specialties",
        title: "Chef Specialties",
        icon: Coffee,
        items: [
            { name: "Choripollo", description: "Grilled chicken, chorizo, and onions, served with rice, beans, and tortillas.", price: "$19.59" },
            { name: "Pollo Chipotle", description: "Marinated chicken breast covered in chipotle sauce and Monterey Jack cheese.", price: "$18.59" },
            { name: "Pollo Santa Fe", description: "Marinated chicken breast, grilled shop vegetables, served with rice, beans, & salad.", price: "$18.15" },
            { name: "Crazy Burger", description: "Classic cheeseburger with a Mexican twist: avocado, lettuce, tomato, and pickles.", price: "$12.99" },
        ]
    },
    {
        id: "enchiladas",
        title: "Enchiladas & Burritos",
        icon: Info,
        items: [
            { name: "Burrito California", description: "Extra large burrito stuffed with steak or chicken, rice, beans, and topped with cheese sauce.", price: "$17.25" },
            { name: "Enchiladas Suizas", description: "Three chicken enchiladas topped with our signature green tomatillo sauce and Monterey Jack.", price: "$16.50" },
            { name: "Enchiladas Supremas", description: "Four different enchiladas (beef, chicken, bean, and cheese) topped with cheese, lettuce, and sour cream.", price: "$15.50" },
        ]
    },
    {
        id: "combinations",
        title: "Combinations & More",
        icon: UtensilsCrossed,
        items: [
            { name: "Create Your Own Combo", description: "Choose any two items: Taco, Enchilada, Tamale, or Tostada. Served with rice and beans.", price: "$15.99" },
            { name: "Chimichanga", description: "Deep-fried flour tortilla stuffed with beef or chicken, topped with cheese sauce.", price: "$14.99" },
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        icon: Coffee,
        items: [
            { name: "Fried Ice Cream", description: "Vanilla ice cream coated in a crunchy coating, deep-fried, and topped with honey and chocolate.", price: "$8.50" },
            { name: "Sopapillas", description: "Crispy fried flour tortillas drizzled with honey, butter, and cinnamon.", price: "$6.99" },
        ]
    }
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("starters");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-150px 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveCategory(entry.target.id);
                }
            });
        }, observerOptions);

        menuCategories.forEach((category) => {
            const element = document.getElementById(category.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className="bg-matte-black min-h-screen pt-24 pb-24">

            {/* Menu Hero */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-background-mexican-restaurant-v2.jpg"
                        alt="Menu Background"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20 blur-sm scale-105"
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
                            OUR <span className="text-electric-yellow neon-text">MENU</span>
                        </h1>
                        <p className="text-white/80 font-sans text-lg max-w-2xl mx-auto drop-shadow-md">
                            Explore our full selection of authentic dishes, from sizzling fajitas to our signature cactus specialties.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sticky Navigation */}
            <div className="sticky top-[104px] md:top-[120px] z-40 bg-matte-black/70 backdrop-blur-md border-y border-white/5 py-4 mb-12 shadow-2xl">
                <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-4 md:gap-8 min-w-max">
                        {menuCategories.map((category) => (
                            <Link
                                key={category.id}
                                href={`#${category.id}`}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-normal border ${activeCategory === category.id
                                    ? "bg-electric-yellow text-black border-electric-yellow shadow-[0_0_15px_rgba(242,223,13,0.4)]"
                                    : "bg-transparent text-white/50 border-transparent hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                {category.title}
                            </Link>
                        ))}
                        <a
                            href="/menu.png"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 ml-4 group"
                        >
                            <Download className="w-4 h-4 group-hover:animate-bounce" />
                            Full PDF
                        </a>
                    </div>
                </div>
            </div>

            {/* Menu Content */}
            <div className="container mx-auto px-4 md:px-6 space-y-24">
                {menuCategories.map((category, idx) => (
                    <section key={category.id} id={category.id} className="scroll-mt-52 md:scroll-mt-64">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-end gap-4 mb-12 border-b border-white/10 pb-6">
                                <h2 className="text-4xl md:text-5xl font-display font-black text-white">
                                    {category.title.split(" ").map((word, i) => (
                                        i === 0 ? <span key={i} className="text-electric-yellow">{word} </span> : word + " "
                                    ))}
                                </h2>
                                <span className="hidden md:block h-px flex-1 bg-white/10 mb-4" />
                            </div>

                            {category.startMessage && (
                                <div className="mb-8 flex items-center gap-3 text-electric-yellow bg-electric-yellow/5 p-4 rounded-xl border border-electric-yellow/10">
                                    <Info className="w-5 h-5 shrink-0" />
                                    <p className="text-sm font-bold">{category.startMessage}</p>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-12">
                                {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="group p-6 rounded-2xl border border-transparent hover:bg-[#1A1A1A] hover:border-white/5 transition-all duration-300 flex justify-between gap-6 touch-manipulation cursor-pointer">
                                        <div className="space-y-3 flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-electric-yellow transition-colors leading-tight">
                                                {item.name}
                                            </h3>
                                            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm font-medium">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-6 justify-between min-w-[80px]">
                                            <span className="text-lg md:text-xl font-black text-electric-yellow font-display tabular-nums">
                                                {item.price}
                                            </span>

                                            {/* Circular Add Button */}
                                            <button
                                                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 bg-white/5 hover:bg-electric-yellow hover:text-black hover:border-electric-yellow transition-all duration-300 group/btn shadow-lg"
                                                aria-label={`Add ${item.name} to order`}
                                            >
                                                <Plus className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:rotate-90 stroke-[3px]" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </section>
                ))}
            </div>

            {/* Final CTA */}
            <section className="mt-32 text-center pb-12">
                <p className="text-white/40 mb-6">Looking for something else?</p>
                <Link href="/#reserve" className="btn-primary inline-flex items-center gap-2">
                    Book a Table
                </Link>
            </section>
        </main>
    );
}
