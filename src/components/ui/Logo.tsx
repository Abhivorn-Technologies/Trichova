import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className, isScrolled = false }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-0.5", className)}>
      <div className="relative flex flex-col items-center">
        {/* The Hair Follicle Icon */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 64 64"
          fill="none"
          className="text-gold mb-[-8px] z-10"
          style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" }}
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EAD196" />
              <stop offset="50%" stopColor="#C9A15A" />
              <stop offset="100%" stopColor="#9C7835" />
            </linearGradient>
            <linearGradient id="goldSwoop" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#C9A15A" stopOpacity="0" />
              <stop offset="30%" stopColor="#EAD196" />
              <stop offset="50%" stopColor="#C9A15A" />
              <stop offset="70%" stopColor="#EAD196" />
              <stop offset="100%" stopColor="#C9A15A" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Central Teardrop Bulb */}
          <path
            d="M32 46 C 26 46 25 40 25 35 C 25 28 32 20 32 20 C 32 20 39 28 39 35 C 39 40 38 46 32 46 Z"
            fill="url(#goldGradient)"
          />
          {/* Inner droplet shadow/highlight effect */}
          <path
            d="M32 43 C 28 43 27 39 27 35 C 27 30 32 24 32 24 C 32 24 37 30 37 35 C 37 39 36 43 32 43 Z"
            fill="#0E1A2B"
            opacity="0.3"
          />
          <path
            d="M30 40 C 29 40 28.5 38 28.5 35 C 28.5 32 30 28 30 28 C 30 28 31.5 32 31.5 35 C 31.5 38 31 40 30 40 Z"
            fill="#FFF"
            opacity="0.6"
          />

          {/* Upward Strands */}
          <path d="M32 20 C 32 12 36 6 42 2" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M30 22 C 30 16 28 10 24 6" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M34 22 C 34 16 38 12 42 10" stroke="url(#goldGradient)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Horizontal Sweeping Strands */}
          <path d="M25 35 C 18 35 12 33 6 36" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M39 35 C 46 35 52 33 58 36" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          
          <path d="M26 38 C 20 38 15 36 10 39" stroke="url(#goldGradient)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M38 38 C 44 38 49 36 54 39" stroke="url(#goldGradient)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>



        <div
          className={cn(
            "font-serif font-bold text-3xl leading-none tracking-widest uppercase transition-colors duration-300 relative z-20 mt-1",
            isScrolled ? "text-navy-900" : "text-white"
          )}
          style={{ textShadow: isScrolled ? "none" : "0px 2px 4px rgba(0,0,0,0.3)" }}
        >
          Trichova
        </div>
      </div>

      <div className="flex items-center gap-3 opacity-90 mt-1.5">
        <div className={cn("w-6 h-[1px] transition-colors duration-300", isScrolled ? "bg-navy-900" : "bg-gold")}></div>
        <div className={cn("text-[9.5px] font-bold uppercase tracking-[0.3em] leading-none transition-colors duration-300", isScrolled ? "text-navy-900" : "text-gold")}>
          Hair Studio
        </div>
        <div className={cn("w-6 h-[1px] transition-colors duration-300", isScrolled ? "bg-navy-900" : "bg-gold")}></div>
      </div>
    </div>
  );
}
