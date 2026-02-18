import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-matte-black p-6">
            <div className="glass-card p-2 border-white/5">
                <SignUp
                    appearance={{
                        elements: {
                            formButtonPrimary: "bg-electric-yellow hover:bg-electric-yellow/90 text-black text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-xl",
                            card: "bg-transparent border-none shadow-none",
                            headerTitle: "text-white font-display text-2xl font-black tracking-tighter",
                            headerSubtitle: "text-white/40 font-sans text-sm",
                            socialButtonsBlockButton: "bg-white/5 border-white/10 text-white hover:bg-white/10",
                            formFieldLabel: "text-white/60 font-bold uppercase text-[10px] tracking-widest",
                            formFieldInput: "bg-white/5 border-white/10 text-white rounded-lg",
                            footerActionText: "text-white/40",
                            footerActionLink: "text-electric-yellow hover:text-electric-yellow/80",
                        }
                    }}
                />
            </div>
        </div>
    );
}
