import { Mic, Martini } from "lucide-react";

export const events = [
    {
        id: "karaoke",
        slug: "karaoke-nights",
        title: "KARAOKE NIGHTS",
        description: "Sing your heart out every Thursday and Saturday night at Crazy Cactus! Enjoy great music, delicious drinks, and a fun atmosphere.",
        time: "Weekly Thu/Sat",
        image: "/generated/antigravity/mexican_karaoke_night_cover.png",
        icon: Mic,
        color: "text-lime-green",
        bg: "bg-lime-green/10",
        details: {
            schedule: "Every Thursday & Saturday",
            highlights: [
                "Professional Sound System",
                "Thousands of Songs",
                "Drink Specials all night"
            ]
        }
    },
    {
        id: "happy-hour",
        slug: "happy-hour",
        title: "HAPPY HOUR",
        description: "House Lime Margaritas: Small $5.99, Jumbo $8.99, Pitcher $16.99. Everyday 2pm-7pm.",
        time: "Everyday 2pm - 7pm",
        image: "/hero-background-mexican-restaurant-v2.jpg",
        icon: Martini,
        color: "text-electric-yellow",
        bg: "bg-electric-yellow/10",
        details: {
            schedule: "Daily 2:00 PM - 7:00 PM",
            pricing: [
                { item: "Small House Lime Margarita", price: "$5.99" },
                { item: "Jumbo House Lime Margarita", price: "$8.99" },
                { item: "Pitcher House Lime Margarita", price: "$16.99" }
            ]
        }
    }
];
