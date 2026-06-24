import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className, isScrolled = false }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className="w-[260px] h-[95px] relative transition-all duration-300"
        style={{
          maskImage: "url(/trichova_mainlogo.png)",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskImage: "url(/trichova_mainlogo.png)",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          // Colors the top 55% (hair) bright gold, and bottom 45% (text) bright white or navy
          background: isScrolled
            ? "linear-gradient(to bottom, #D4AF37 0%, #B38728 55%, #0F172A 55.1%, #0F172A 100%)"
            : "linear-gradient(to bottom, #FFE898 0%, #D4AF37 55%, #FFFFFF 55.1%, #FFFFFF 100%)",
        }}
      />
    </div>
  );
}
