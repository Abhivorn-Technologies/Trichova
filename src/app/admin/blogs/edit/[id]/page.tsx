"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { getPostById, updateBlogPost } from "@/lib/actions/blog";
import { ChevronLeft, Save, RefreshCw, UserCheck, X } from "lucide-react";

const PRESET_CATEGORIES = [
  "Hair Transplants",
  "Beard Transplants",
  "Scalp Care",
  "Non-Surgical Treatments",
  "Hair Loss Prevention",
  "Patient Stories",
  "Clinic News",
];

export default function EditBlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    customCategory: "",
    excerpt: "",
    content: "",
    coverImage: "",
    authorName: "",
    authorRole: "",
    authorAvatar: "",
    readTime: "",
    tags: "",
    published: true,
  });

  useEffect(() => {
    async function loadPost() {
      if (!id) return;
      setIsLoading(true);
      const post = await getPostById(id);
      if (post) {
        setFormData({
          title: post.title,
          slug: post.slug,
          category: post.category,
          customCategory: "",
          excerpt: post.excerpt,
          content: post.content,
          coverImage: post.coverImage,
          authorName: post.author.name,
          authorRole: post.author.role,
          authorAvatar: post.author.avatar,
          readTime: post.readTime,
          tags: post.tags ? post.tags.join(", ") : "",
          published: post.published,
        });
      } else {
        setError("Blog post not found in MongoDB.");
      }
      setIsLoading(false);
    }
    loadPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const categoryToSave =
      formData.customCategory.trim() !== ""
        ? formData.customCategory.trim()
        : formData.category;

    const tagsArray = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");

    const res = await updateBlogPost(id, {
      title: formData.title,
      slug: formData.slug,
      category: categoryToSave,
      excerpt: formData.excerpt,
      content: formData.content,
      coverImage: formData.coverImage,
      authorName: formData.authorName,
      authorRole: formData.authorRole,
      authorAvatar: formData.authorAvatar,
      readTime: formData.readTime,
      tags: tagsArray,
      published: formData.published,
    });

    if (res.success) {
      router.push("/admin/blogs");
      router.refresh();
    } else {
      setError(res.error || "Failed to update blog post");
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <div className="flex items-center gap-3 text-amber-400 font-semibold">
          <RefreshCw className="w-5 h-5 animate-spin" /> Loading article details from MongoDB...
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen max-h-screen bg-slate-950 text-slate-100 pt-6 pb-6 overflow-hidden flex flex-col">
      <div className="w-[97%] mx-auto px-2 sm:px-4 flex flex-col flex-1 h-full min-h-0">
        {/* Header - Fixed */}
        <div className="shrink-0 mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/blogs"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 hover:text-amber-300 hover:bg-slate-800 transition-colors shrink-0"
              title="Back to Dashboard"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>

            <div>
              <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
                Admin Authoring
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">Edit Article</h1>
              <p className="text-xs sm:text-sm text-slate-400">
                Modify article details, doctor bio, body content, image, or category in your MongoDB database.
              </p>
            </div>
          </div>
        </div>

        {error && (
          <div className="shrink-0 mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 min-h-0 bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Scrollable Form Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Article Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-semibold"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                URL Slug (Unique Identifier)
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-mono"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Public URL: <span className="text-amber-400">/blogs/{formData.slug}</span>
              </p>
            </div>

            {/* Category & Read Time Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Category
                </label>
                <input
                  type="text"
                  value={formData.customCategory || formData.category}
                  onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium mb-3"
                />
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: cat, customCategory: "" })}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition-all ${
                        (formData.customCategory === "" && formData.category === cat)
                          ? "bg-amber-500 text-slate-950 border-amber-500 font-bold"
                          : "bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      + {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Estimated Read Time
                </label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium"
                />
              </div>
            </div>

            {/* Topic Tags */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Topic Tags (Comma-Separated)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Separate tags with commas.
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Short Excerpt / Summary *
              </label>
              <textarea
                required
                rows={2}
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium"
              />
            </div>

            {/* Cover Image */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Cover Image URL *
              </label>
              <input
                type="text"
                required
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium"
              />
            </div>

            {/* Author Details Grid */}
            <div className="p-4 bg-slate-950/40 border border-slate-800/80 rounded-2xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5" /> Author & Specialist Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Doctor Name</label>
                  <input
                    type="text"
                    value={formData.authorName}
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Role / Designation</label>
                  <input
                    type="text"
                    value={formData.authorRole}
                    onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-400 mb-1">Doctor Image Path</label>
                  <input
                    type="text"
                    value={formData.authorAvatar}
                    onChange={(e) => setFormData({ ...formData, authorAvatar: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Article HTML Content */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Article Content (HTML formatting allowed) *
              </label>
              <textarea
                required
                rows={12}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 transition-colors text-sm font-mono leading-relaxed"
              />
            </div>

            {/* Published Toggle */}
            <div className="flex items-center justify-between p-4 bg-slate-950/40 border border-slate-800 rounded-xl">
              <div>
                <p className="text-sm font-semibold text-white">Status: {formData.published ? "Published" : "Draft"}</p>
                <p className="text-xs text-slate-400">Toggle whether this article is live on the public /blogs catalog</p>
              </div>
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Fixed Bottom Action Bar */}
          <div className="shrink-0 bg-slate-950/90 border-t border-slate-800 px-6 py-4 sm:px-8 flex items-center justify-between rounded-b-3xl">
            <Link
              href="/admin/blogs"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors"
            >
              <X className="w-4 h-4" /> Cancel
            </Link>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSubmitting ? "Updating MongoDB..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
