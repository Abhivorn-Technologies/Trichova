import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trichovahair.com";
  
  const routes = [
    "",
    "/about",
    "/treatments",
    "/treatments/bio-fue",
    "/treatments/dht-hair-transplant",
    "/treatments/fue-hair-transplant",
    "/treatments/female-hair-transplant",
    "/treatments/beard-transplant",
    "/results",
    "/why-trichova",
    "/faqs",
    "/contact",
    "/book-consultation",
    "/privacy-policy",
    "/refund-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/treatments/") ? 0.8 : 0.5,
  }));
}
