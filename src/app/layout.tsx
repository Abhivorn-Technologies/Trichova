import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayoutWrapper from "@/components/layout/ConditionalLayoutWrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trichova Hair Studio | Advanced Hair Transplant & Restoration",
  description:
    "World-class hair transplant treatments delivering natural, permanent results through BIOFUE, DHT and Sapphire technologies. 95–98% graft survival rate. Doctor-led procedures. Book your free consultation today.",
  keywords: [
    "hair transplant",
    "hair restoration",
    "DHT hair transplant",
    "FUE hair transplant",
    "Sapphire hair transplant",
    "BIOFUE",
    "beard transplant",
    "hair loss treatment",
    "Trichova",
    "hair studio",
    "GFC treatment",
    "exosome therapy",
  ],
  authors: [{ name: "Trichova Hair Studio" }],
  creator: "Trichova Hair Studio",
  icons: {
    icon: "/trichova_favicon_ultra_zoomed.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Trichova Hair Studio | Advanced Hair Transplant & Restoration",
    description:
      "World-class hair transplant treatments delivering natural, permanent results through BIOFUE, DHT and Sapphire technologies.",
    siteName: "Trichova Hair Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trichova Hair Studio | Advanced Hair Transplant & Restoration",
    description:
      "World-class hair transplant treatments with 95–98% graft survival rate.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H79FX4SS38"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H79FX4SS38');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-950 text-slate-100`} suppressHydrationWarning>
        <ConditionalLayoutWrapper>{children}</ConditionalLayoutWrapper>
      </body>
    </html>
  );
}
