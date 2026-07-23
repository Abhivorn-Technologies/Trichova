import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPublishedPosts, getCategories } from "@/lib/actions/blog";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import BlogSearchBar from "@/components/blog/BlogSearchBar";
import ConsultationCTA from "@/components/sections/ConsultationCTA";
import { formatImageUrl } from "@/lib/utils";

interface BlogPageProps {
  searchParams: Promise<{
    category?: string;
    q?: string;
  }>;
}

export const metadata = {
  title: "Hair Health & Transplants Blog | Trichova Hair Studio",
  description: "Expert insights, medical advice, and patient guides on Bio-FUE hair transplants, GFC therapy, scalp care, and hair restoration.",
};

export default async function BlogIndexPage({ searchParams }: BlogPageProps) {
  const resolvedParams = await searchParams;
  const activeCategory = resolvedParams.category || "All";
  const searchQuery = resolvedParams.q || "";

  const posts = await getPublishedPosts(activeCategory, searchQuery);

  const categoryList = await getCategories();
  const allCategories = ["All", ...categoryList.map((c) => c.name)];

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const regularPosts = posts.length > 1 ? posts.slice(1) : posts;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Page Hero */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Category Filter Section */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-slate-800/80">
          {/* Categories - Clean Flex Layout on Tablet & Desktop, Hidden Scrollbar on Mobile */}
          <div className="w-full lg:w-auto overflow-x-auto md:overflow-x-visible py-1 -mx-4 px-4 sm:mx-0 sm:px-0 [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center md:flex-wrap gap-2 min-w-max md:min-w-0">
              {allCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <Link
                    key={cat}
                    href={cat === "All" ? "/blogs" : `/blogs?category=${encodeURIComponent(cat)}`}
                    className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0 ${
                      isActive
                        ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                        : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Search Input */}
          <BlogSearchBar initialQuery={searchQuery} activeCategory={activeCategory} />
        </div>

        {/* Empty state */}
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800/60 my-12">
            <Tag className="w-12 h-12 text-amber-500/50 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No Articles Found</h3>
            <p className="text-slate-400 max-w-md mx-auto mb-6">
              We couldn&apos;t find any articles matching your search criteria. Try browsing all categories or resetting your search.
            </p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-semibold px-6 py-2.5 rounded-full hover:bg-amber-400 transition-all"
            >
              View All Articles
            </Link>
          </div>
        ) : (
          <>
            {/* Featured Post (Only if no search filter active or on first page) */}
            {featuredPost && !searchQuery && activeCategory === "All" && (
              <div className="mb-16">
                <div className="group relative bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl">
                  <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[320px] overflow-hidden">
                    <Image
                      src={formatImageUrl(featuredPost.coverImage)}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
                    <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Featured Article
                    </span>
                  </div>

                  <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-amber-400/90 font-medium mb-3">
                        <span className="bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-md">
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-amber-400 transition-colors duration-200 mb-4 leading-tight">
                        <Link href={`/blogs/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h2>

                      <p className="text-slate-300 text-sm lg:text-base line-clamp-3 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-3 sm:gap-4">
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                        <div className="w-9 h-9 rounded-full overflow-hidden relative border border-amber-500/30 shrink-0">
                          <Image
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-white truncate">{featuredPost.author.name}</p>
                          <p className="text-[11px] text-slate-400 truncate">{featuredPost.author.role}</p>
                        </div>
                      </div>

                      <Link
                        href={`/blogs/${featuredPost.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform whitespace-nowrap shrink-0"
                      >
                        Read Post <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="w-2 h-6 bg-amber-500 rounded-full" />
                Latest Articles
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post._id}
                    className="group bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={formatImageUrl(post.coverImage)}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/30 text-xs font-semibold px-2.5 py-1 rounded-md">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-amber-500" />
                            {new Date(post.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-amber-500" />
                            {post.readTime}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-3 leading-snug">
                          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                        </h4>

                        <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-800/40 mt-auto flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-slate-500" />
                        <span className="text-slate-300 font-medium">{post.author.name}</span>
                      </div>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                      >
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <ConsultationCTA />
    </main>
  );
}
