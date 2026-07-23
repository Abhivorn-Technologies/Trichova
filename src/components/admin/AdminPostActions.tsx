"use client";

import React, { useState } from "react";
import Link from "next/link";
import { togglePublishStatus, deleteBlogPost } from "@/lib/actions/blog";
import { Eye, EyeOff, Trash2, ExternalLink, Edit } from "lucide-react";

interface AdminPostActionsProps {
  postId: string;
  published: boolean;
  slug: string;
}

export default function AdminPostActions({ postId, published, slug }: AdminPostActionsProps) {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleTogglePublish = async () => {
    setIsPublishing(true);
    await togglePublishStatus(postId);
    setIsPublishing(false);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this blog post permanently?")) {
      setIsDeleting(true);
      await deleteBlogPost(postId);
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <Link
        href={`/admin/blogs/edit/${postId}`}
        className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-colors"
        title="Edit Article"
      >
        <Edit className="w-4 h-4" />
      </Link>

      <Link
        href={`/blogs/${slug}`}
        target="_blank"
        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        title="Preview Article"
      >
        <ExternalLink className="w-4 h-4" />
      </Link>

      <button
        onClick={handleTogglePublish}
        disabled={isPublishing}
        className={`p-2 rounded-lg transition-colors ${
          published
            ? "text-emerald-400 hover:bg-emerald-500/10"
            : "text-slate-400 hover:text-amber-400 hover:bg-slate-800"
        }`}
        title={published ? "Unpublish Article" : "Publish Article"}
      >
        {published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
      </button>

      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
        title="Delete Article"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
