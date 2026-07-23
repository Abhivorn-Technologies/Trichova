import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPostsAdmin } from "@/lib/actions/blog";
import { Plus, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import AdminPostActions from "@/components/admin/AdminPostActions";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import { formatImageUrl } from "@/lib/utils";

export const metadata = {
  title: "Blog Management Dashboard | Trichova Admin",
};

export default async function AdminBlogsPage() {
  const posts = await getAllPostsAdmin();

  return (
    <main className="h-screen max-h-screen bg-slate-950 text-slate-100 pt-6 pb-6 overflow-hidden flex flex-col">
      <div className="w-[97%] mx-auto px-2 sm:px-4 flex flex-col flex-1 h-full min-h-0">
        {/* Header - Fixed */}
        <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
              Admin Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Blog Management</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Manage, publish, edit, or delete articles stored in your MongoDB database.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/admin/blogs/new"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-xs md:text-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full transition-all shadow-lg shadow-amber-500/20"
            >
              <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" /> Create New Article
            </Link>
            <AdminLogoutButton />
          </div>
        </div>

        {/* Stats Row - Fixed Single Row on Mobile & Desktop */}
        <div className="shrink-0 grid grid-cols-3 gap-2 sm:gap-6 mb-4 sm:mb-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-5 flex items-center gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">Total Articles</p>
              <h3 className="text-base sm:text-2xl font-bold text-white">{posts.length}</h3>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-5 flex items-center gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">Published Live</p>
              <h3 className="text-base sm:text-2xl font-bold text-white">
                {posts.filter((p) => p.published).length}
              </h3>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl sm:rounded-2xl p-2.5 sm:p-5 flex items-center gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">Drafts</p>
              <h3 className="text-base sm:text-2xl font-bold text-white">
                {posts.filter((p) => !p.published).length}
              </h3>
            </div>
          </div>
        </div>

        {/* Posts Table Container - Internal Scroll Only */}
        <div className="flex-1 min-h-0 bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          {posts.length === 0 ? (
            <div className="p-12 text-center my-auto">
              <p className="text-slate-400 mb-4">No articles found in MongoDB.</p>
              <Link
                href="/admin/blogs/new"
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-full text-xs"
              >
                <Plus className="w-4 h-4" /> Create First Article
              </Link>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto overflow-x-auto w-full max-w-full">
              <table className="w-full min-w-[768px] text-left text-sm text-slate-300 border-collapse">
                <thead className="sticky top-0 z-20 bg-slate-950 text-xs uppercase text-slate-400 border-b border-slate-800 shadow-sm">
                  <tr>
                    <th className="py-4 px-6 bg-slate-950">Article</th>
                    <th className="py-4 px-6 bg-slate-950">Category</th>
                    <th className="py-4 px-6 bg-slate-950">Author</th>
                    <th className="py-4 px-6 bg-slate-950">Status</th>
                    <th className="py-4 px-6 bg-slate-950">Created Date</th>
                    <th className="py-4 px-6 text-right bg-slate-950">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {posts.map((post) => (
                    <tr key={post._id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-800"
                            style={{ position: "relative", width: "48px", height: "48px" }}
                          >
                            <Image
                              src={formatImageUrl(post.coverImage)}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <Link
                              href={`/blogs/${post.slug}`}
                              target="_blank"
                              className="font-bold text-white hover:text-amber-400 transition-colors line-clamp-1"
                            >
                              {post.title}
                            </Link>
                            <span className="text-xs text-slate-500 block">/blogs/{post.slug}</span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {post.category}
                        </span>
                      </td>

                      <td className="py-4 px-6 font-medium text-slate-200">
                        {post.author.name}
                      </td>

                      <td className="py-4 px-6">
                        {post.published ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Published
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            Draft
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-6 text-xs text-slate-400 whitespace-nowrap">
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>

                      <td className="py-4 px-6 text-right">
                        <AdminPostActions postId={post._id} published={post.published} slug={post.slug} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
