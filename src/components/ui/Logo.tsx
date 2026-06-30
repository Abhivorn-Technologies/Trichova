import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className, isScrolled = false }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {/* White text logo for dark backgrounds (top of page / footer) */}
      <Image
        src="/trichova_logo_white_text.png"
        alt="Trichova Logo Light"
        width={90}
        height={33}
        className={cn("object-contain transition-opacity duration-300", isScrolled ? "opacity-0 absolute" : "opacity-100")}
        quality={100}
        unoptimized
        priority
      />
      
      {/* Original Navy text logo for light backgrounds (scrolled navbar) */}
      <Image
        src="/trichova_logo_transparent.png"
        alt="Trichova Logo Dark"
        width={90}
        height={33}
        className={cn("object-contain transition-opacity duration-300", isScrolled ? "opacity-100" : "opacity-0 absolute")}
        quality={100}
        unoptimized
        priority
      />
    </div>
  );
}
