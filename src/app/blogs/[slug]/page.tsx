import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts } from "@/lib/actions/blog";
import { Calendar, Clock, ArrowLeft, Share2, Tag, ShieldCheck } from "lucide-react";
import ConsultationCTA from "@/components/sections/ConsultationCTA";
import { formatImageUrl } from "@/lib/utils";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | Trichova Hair Studio",
    };
  }

  return {
    title: `${post.title} | Trichova Hair Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function SingleBlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Fetch recent posts for sidebar / recommendations
  const allPosts = await getPublishedPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header Banner */}
      <div className="bg-slate-900/60 border-b border-slate-800/80 pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>

          <div className="flex items-center gap-3 text-xs text-amber-400 font-semibold mb-4">
            <span className="bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author info & Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-amber-500/30">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  {post.author.name}
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                </h4>
                <p className="text-xs text-slate-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-500" />
                Published {new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Cover Image */}
        <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
          <Image
            src={formatImageUrl(post.coverImage)}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-amber max-w-none prose-lg leading-relaxed text-slate-300">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="[&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-amber-400 [&>h2]:border-l-4 [&>h2]:border-amber-500 [&>h2]:pl-4 [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:tracking-tight [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-amber-300 [&>h3]:mt-8 [&>h3]:mb-3 [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-amber-200/90 [&>h4]:mt-6 [&>h4]:mb-2 [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-slate-200 [&>strong]:text-amber-300 [&>strong]:font-bold [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2 [&>ul>li]:text-slate-200 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2 [&>ol>li]:text-slate-200 [&>blockquote]:border-l-4 [&>blockquote]:border-amber-500 [&>blockquote]:pl-5 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:bg-slate-900/80 [&>blockquote]:rounded-r-2xl [&>blockquote]:text-slate-200 [&>blockquote]:font-medium [&>blockquote]:italic"
          />
        </article>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1 mr-2">
              <Tag className="w-3.5 h-3.5 text-amber-500" /> Topic Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-900 border border-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Card */}
        <div className="mt-12 p-8 bg-slate-900/80 border border-slate-800 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden relative border-2 border-amber-500/40 shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
              Written by Clinical Specialist
            </span>
            <h3 className="text-lg font-bold text-white mb-1">{post.author.name}</h3>
            <p className="text-xs text-amber-400/80 mb-3">{post.author.role}</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Specialist at Trichova Hair Studio dedicated to advanced hair restoration, Bio-FUE surgery techniques, and personalized trichology treatments.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-800/80">
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel._id}
                  href={`/blogs/${rel.slug}`}
                  className="group bg-slate-900/50 border border-slate-800/80 rounded-2xl p-5 hover:border-amber-500/40 transition-all"
                >
                  <div className="relative h-36 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={formatImageUrl(rel.coverImage)}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[11px] text-amber-400 font-medium">{rel.category}</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 line-clamp-2 mt-1 mb-2">
                    {rel.title}
                  </h4>
                  <span className="text-xs text-slate-400">{rel.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <ConsultationCTA />
    </main>
  );
}
