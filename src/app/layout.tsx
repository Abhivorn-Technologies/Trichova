import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trichova Hair Studio | Advanced Hair Transplant & Restoration",
  description:
    "World-class hair transplant treatments delivering natural, permanent results through BIOFUE, DHI and Sapphire technologies. 95–98% graft survival rate. Doctor-led procedures. Book your free consultation today.",
  keywords: [
    "hair transplant",
    "hair restoration",
    "DHI hair transplant",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Trichova Hair Studio | Advanced Hair Transplant & Restoration",
    description:
      "World-class hair transplant treatments delivering natural, permanent results through BIOFUE, DHI and Sapphire technologies.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
