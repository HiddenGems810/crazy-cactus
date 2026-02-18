import { ArrowUpRight, TrendingUp, Users, DollarSign, Package } from "lucide-react";

const stats = [
    { label: "Orders Today", value: "48", change: "+12%", icon: Package, color: "text-electric-yellow" },
    { label: "Amigos Club", value: "1,204", change: "+5.4%", icon: Users, color: "text-lime-green" },
    { label: "Revenue Today", value: "$2,480.50", change: "+18%", icon: DollarSign, color: "text-electric-yellow" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-12">
            {/* Header Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight mb-2">OPERATIONS <span className="text-electric-yellow">OVERVIEW</span></h1>
                    <p className="text-white/40 text-sm font-medium">Real-time performance metrics for Crazy Cactus.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="glass-card p-8 border-white/5 hover:border-white/10 transition-all relative overflow-hidden group hover:-translate-y-1"
                        role="region"
                        aria-label={`${stat.label} statistic`}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                            <stat.icon className="w-16 h-16" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3">{stat.label}</p>
                        <div className="flex items-end gap-3">
                            <h3 className="text-4xl font-black tabular-nums tracking-tighter">{stat.value}</h3>
                            <div className="flex flex-col mb-1">
                                <span className={stat.color + " text-[10px] font-black flex items-center gap-1 uppercase tracking-wider"}>
                                    <TrendingUp className="w-3 h-3" />
                                    {stat.change}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Orders */}
                <div className="glass-card p-8 border-white/5 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/80">Active Orders</h4>
                        <button
                            className="text-[10px] font-black uppercase tracking-widest text-electric-yellow hover:text-white transition-all flex items-center gap-2 group"
                            aria-label="View all orders"
                        >
                            FULL LOG <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        {[
                            { id: "#4829", name: "Ger'Quia Abner", status: "Preparing", total: "$42.00" },
                            { id: "#4828", name: "John Doe", status: "Ready", total: "$18.50" },
                            { id: "#4827", name: "Jane Smith", status: "Delivered", total: "$65.20" },
                        ].map((order) => (
                            <div
                                key={order.id}
                                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-normal group"
                            >
                                <div className="flex items-center gap-5">
                                    <span className="text-[10px] font-black font-mono text-white/20 group-hover:text-white/40 transition-colors uppercase">{order.id}</span>
                                    <p className="text-xs font-black tracking-tight">{order.name}</p>
                                </div>
                                <div className="flex items-center gap-8">
                                    <span className={
                                        order.status === "Preparing" ? "text-electric-yellow font-black text-[9px] uppercase tracking-[0.2em] bg-electric-yellow/10 px-2 py-1 rounded" :
                                            order.status === "Ready" ? "text-lime-green font-black text-[9px] uppercase tracking-[0.2em] bg-lime-green/10 px-2 py-1 rounded" :
                                                "text-white/20 font-black text-[9px] uppercase tracking-[0.2em] bg-white/5 px-2 py-1 rounded"
                                    }>
                                        {order.status}
                                    </span>
                                    <span className="text-xs font-black tabular-nums">{order.total}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Amigos Club Insight */}
                <div className="glass-card p-8 border-white/5 flex flex-col">
                    <div className="mb-8">
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/80">Membership Pulse</h4>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">Growth Index (Past 7 Days)</p>
                    </div>
                    <div className="flex-1 flex items-end gap-3 px-2 min-h-[200px]">
                        {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-white/5 rounded-t-lg hover:bg-electric-yellow/40 transition-all cursor-crosshair group relative"
                                style={{ height: `${height}%` }}
                            >
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 glass-card px-3 py-1.5 border-white/10 opacity-0 group-hover:opacity-100 transition-all shadow-xl pointer-events-none z-30">
                                    <p className="text-[10px] font-black text-electric-yellow whitespace-nowrap">+{height * 10}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-electric-yellow rounded-full animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Healthy Growth</span>
                        </div>
                        <button className="text-[9px] font-black uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full hover:bg-white/5 transition-colors">
                            Analytics
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
