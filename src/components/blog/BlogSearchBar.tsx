"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";

interface BlogSearchBarProps {
  initialQuery: string;
  activeCategory: string;
}

export default function BlogSearchBar({ initialQuery, activeCategory }: BlogSearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const updateSearch = (newQuery: string) => {
    setQuery(newQuery);
    if (newQuery.trim() === "") {
      // Instantly reset back to all articles when text is erased
      const params = new URLSearchParams(searchParams.toString());
      params.delete("q");
      const queryString = params.toString();
      router.push(queryString ? `/blogs?${queryString}` : "/blogs");
    }
  };

  const handleClear = () => {
    setQuery("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");
    const queryString = params.toString();
    router.push(queryString ? `/blogs?${queryString}` : "/blogs");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set("q", query.trim());
    } else {
      params.delete("q");
    }
    const queryString = params.toString();
    router.push(queryString ? `/blogs?${queryString}` : "/blogs");
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full lg:w-80 shrink-0">
      <input
        type="text"
        name="q"
        value={query}
        onChange={(e) => updateSearch(e.target.value)}
        placeholder="Search articles..."
        className="w-full bg-slate-900/90 border border-slate-800 rounded-full py-2.5 pl-11 pr-10 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
      />
      <Search className="w-4 h-4 text-slate-500 absolute left-4 top-3 sm:top-3.5" />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 top-3 sm:top-3.5 text-slate-500 hover:text-amber-400 transition-colors"
          title="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </form>
  );
}
