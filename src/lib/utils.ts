import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}

export function formatImageUrl(url: string): string {
  if (!url) return "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop";

  // Automatically convert Google Drive share links to direct renderable image URLs
  const driveRegex = /(?:drive\.google\.com\/(?:file\/d\/|open\?id=)|lh3\.googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/;
  const match = url.match(driveRegex);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }

  return url;
}
