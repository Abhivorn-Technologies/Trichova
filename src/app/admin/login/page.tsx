"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { loginAdmin } from "@/lib/actions/auth";
import { ShieldCheck, Lock, Mail, Eye, EyeOff, LogIn, Home } from "lucide-react";

function LoginFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/admin/blogs";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await loginAdmin({ username, password });

      if (res && res.success) {
        window.location.href = from;
      } else {
        setError(res?.error || "Invalid admin email or password.");
        setIsSubmitting(false);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Invalid admin email or password.";
      setError(msg);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Header Branding */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 shadow-lg shadow-amber-500/10">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <span className="block text-xs font-bold uppercase tracking-widest text-amber-500 mb-1">
          Trichova Admin Portal
        </span>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Restricted Access</h1>
        <p className="text-xs text-slate-400 mt-2">
          Enter your clinic administrator credentials to manage blogs and articles.
        </p>
      </div>

      {/* Error Notification */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-xs font-semibold flex items-center gap-2">
          <Lock className="w-4 h-4 shrink-0 text-red-400" />
          {error}
        </div>
      )}

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        suppressHydrationWarning
        className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl shadow-2xl space-y-5"
      >
        {/* Username / Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Admin Email / Username
          </label>
          <div className="relative">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter administrator email"
              suppressHydrationWarning
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium"
            />
            <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              suppressHydrationWarning
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-11 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium"
            />
            <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              suppressHydrationWarning
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Login Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          suppressHydrationWarning
          className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50 mt-2"
        >
          {isSubmitting ? (
            <span>Authenticating...</span>
          ) : (
            <>
              <LogIn className="w-4 h-4" /> Sign In to Admin Dashboard
            </>
          )}
        </button>
      </form>

      {/* Footer Info */}
      <div className="text-center mt-6">
        <p className="text-[11px] text-slate-500">
          Protected area for authorized Trichova Hair & Skin Clinic staff only.
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Top Right Home Button */}
      <Link
        href="/"
        className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/30 text-slate-300 hover:text-amber-400 transition-all shadow-lg z-50 shrink-0"
        title="Go to Website Homepage"
      >
        <Home className="w-5 h-5" />
      </Link>

      {/* Background Glow Decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-600/5 rounded-full blur-2xl pointer-events-none" />

      <Suspense fallback={<div className="text-amber-400 font-semibold text-sm">Loading login...</div>}>
        <LoginFormContent />
      </Suspense>
    </main>
  );
}
