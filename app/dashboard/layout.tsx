import { ReactNode } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import {
    LayoutDashboard,
    UtensilsCrossed,
    Users,
    BarChart3,
    Settings,
    ShieldCheck,
    ChevronRight
} from "lucide-react";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Menu management", href: "/dashboard/menu", icon: UtensilsCrossed },
    { name: "Amigos Club", href: "/dashboard/amigos", icon: Users },
    { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-matte-black text-white font-sans antialiased">
            {/* Sidebar */}
            <aside className="w-72 border-r border-white/5 bg-deep-charcoal flex flex-col sticky top-0 h-screen z-50">
                <div className="p-8 border-b border-white/5">
                    <Link
                        href="/"
                        className="text-2xl font-display font-black tracking-tighter hover:text-electric-yellow transition-colors block"
                        aria-label="Crazy Cactus Admin Home"
                    >
                        CRAZY <span className="text-electric-yellow">CACTUS</span>
                        <div className="text-[9px] tracking-[0.4em] uppercase text-white/20 mt-1.5 font-black">Management</div>
                    </Link>
                </div>

                <nav className="flex-1 p-6 space-y-3" aria-label="Dashboard Sidebar">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold text-white/40 hover:text-white hover:bg-white/5 transition-all group min-h-[48px]"
                        >
                            <div className="flex items-center gap-4">
                                <item.icon className="w-5 h-5 group-hover:text-electric-yellow transition-colors" />
                                <span className="tracking-tight">{item.name}</span>
                            </div>
                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-electric-yellow" />
                        </Link>
                    ))}
                </nav>

                <div className="p-6 border-t border-white/5 bg-black/20">
                    <div className="flex items-center gap-4 p-4 glass-card border-white/5">
                        <UserButton appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }} />
                        <div className="overflow-hidden">
                            <p className="text-sm font-black truncate">Ger'Quia Abner</p>
                            <div className="flex items-center gap-1.5 text-[9px] text-lime-green font-black uppercase tracking-[0.1em]">
                                <ShieldCheck className="w-3 h-3" />
                                Superuser
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-electric-yellow via-lime-green to-electric-yellow opacity-40 shadow-[0_0_20px_rgba(242,223,13,0.3)]" />
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-x-hidden">
                <header className="h-24 sticky top-0 z-40 border-b border-white/5 px-12 flex items-center justify-between bg-matte-black/70 backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 px-3 py-1 border border-white/10 rounded-full">Secure Zone</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">System Status</span>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-lime-green animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-lime-green">Encrypted</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-12 max-w-7xl mx-auto w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
