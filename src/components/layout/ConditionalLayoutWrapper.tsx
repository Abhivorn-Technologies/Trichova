"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingModal from "@/components/BookingModal";

export default function ConditionalLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Hide main website Navbar, Footer, and Booking Modal for all Admin routes (/admin/*)
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <main className="flex-1 w-full min-h-screen bg-slate-950">{children}</main>;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full relative">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <BookingModal />
    </div>
  );
}
