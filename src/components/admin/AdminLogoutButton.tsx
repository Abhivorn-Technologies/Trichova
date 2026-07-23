"use client";

import React, { useState } from "react";
import { logoutAdmin } from "@/lib/actions/auth";
import { LogOut } from "lucide-react";

export default function AdminLogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logoutAdmin();
    window.location.href = "/admin/login";
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoggingOut}
      className="inline-flex items-center gap-1.5 sm:gap-2 bg-slate-900 hover:bg-red-500/10 border border-slate-800 hover:border-red-500/30 text-slate-300 hover:text-red-400 font-bold px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-4 text-xs rounded-full sm:rounded-xl transition-all disabled:opacity-50"
      title="Sign Out of Admin Portal"
    >
      <LogOut className="w-3 h-3 md:w-3.5 md:h-3.5" />
      {isLoggingOut ? "Signing out..." : "Log Out"}
    </button>
  );
}
