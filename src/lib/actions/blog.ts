"use server";

import { connectToDatabase } from "@/lib/db/mongodb";
import Post, { IPost } from "@/lib/db/models/Post";
import { revalidatePath } from "next/cache";

export interface SerializedPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  published: boolean;
  readTime: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

function serializePost(doc: IPost): SerializedPost {
  return {
    _id: doc._id.toString(),
    title: doc.title,
    slug: doc.slug,
    excerpt: doc.excerpt,
    content: doc.content,
    coverImage: doc.coverImage,
    category: doc.category,
    author: {
      name: doc.author?.name || "Trichova Specialist",
      role: doc.author?.role || "Hair Restoration Expert",
      avatar: doc.author?.avatar || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
    },
    published: doc.published,
    readTime: doc.readTime || "5 min read",
    tags: doc.tags || [],
    createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : new Date().toISOString(),
    updatedAt: doc.updatedAt ? new Date(doc.updatedAt).toISOString() : new Date().toISOString(),
  };
}

export async function getPublishedPosts(category?: string, query?: string): Promise<SerializedPost[]> {
  try {
    await connectToDatabase();
    
    // Build filter
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filter: any = { published: true };
    
    if (category && category !== "All") {
      filter.category = category;
    }
    
    if (query && query.trim() !== "") {
      filter.$or = [
        { title: { $regex: query, $options: "i" } },
        { excerpt: { $regex: query, $options: "i" } },
        { tags: { $in: [new RegExp(query, "i")] } },
      ];
    }
    
    const posts = await Post.find(filter).sort({ createdAt: -1 });
    return posts.map(serializePost);
  } catch (error) {
    console.error("Error fetching published posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<SerializedPost | null> {
  try {
    await connectToDatabase();
    const post = await Post.findOne({ slug });
    if (!post) return null;
    return serializePost(post);
  } catch (error) {
    console.error(`Error fetching post by slug ${slug}:`, error);
    return null;
  }
}

export async function getPostById(id: string): Promise<SerializedPost | null> {
  try {
    await connectToDatabase();
    const post = await Post.findById(id);
    if (!post) return null;
    return serializePost(post);
  } catch (error) {
    console.error(`Error fetching post by id ${id}:`, error);
    return null;
  }
}

export async function getCategories(): Promise<{ name: string; count: number }[]> {
  try {
    await connectToDatabase();
    const posts = await Post.find({ published: true });
    
    const countMap: Record<string, number> = {};
    posts.forEach((p) => {
      const cat = p.category || "General";
      countMap[cat] = (countMap[cat] || 0) + 1;
    });

    const categories = Object.entries(countMap).map(([name, count]) => ({ name, count }));
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getAllPostsAdmin(): Promise<SerializedPost[]> {
  try {
    await connectToDatabase();
    const posts = await Post.find({}).sort({ createdAt: -1 });
    return posts.map(serializePost);
  } catch (error) {
    console.error("Error fetching admin posts:", error);
    return [];
  }
}

export async function createBlogPost(data: {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  published?: boolean;
  readTime?: string;
  tags?: string[];
}) {
  try {
    await connectToDatabase();

    const generatedSlug = data.slug && data.slug.trim() !== "" 
      ? data.slug.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-") 
      : data.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");

    const newPost = new Post({
      title: data.title,
      slug: generatedSlug,
      excerpt: data.excerpt,
      content: data.content,
      coverImage: data.coverImage || "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
      category: data.category || "Hair Health",
      author: {
        name: data.authorName || "Dr. Trichova Team",
        role: data.authorRole || "Senior Hair Transplant Surgeon",
        avatar: data.authorAvatar || "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
      },
      published: data.published ?? true,
      readTime: data.readTime || "5 min read",
      tags: data.tags || [],
    });

    await newPost.save();

    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");

    return { success: true, slug: generatedSlug };
  } catch (error: unknown) {
    console.error("Error creating blog post:", error);
    const message = error instanceof Error ? error.message : "Failed to create blog post";
    return { success: false, error: message };
  }
}

export async function updateBlogPost(
  id: string,
  data: {
    title?: string;
    slug?: string;
    excerpt?: string;
    content?: string;
    coverImage?: string;
    category?: string;
    published?: boolean;
    readTime?: string;
    tags?: string[];
    authorName?: string;
    authorRole?: string;
    authorAvatar?: string;
  }
) {
  try {
    await connectToDatabase();

    const updatePayload: Record<string, unknown> = { ...data };

    if (data.authorName || data.authorRole || data.authorAvatar) {
      if (data.authorName) updatePayload["author.name"] = data.authorName;
      if (data.authorRole) updatePayload["author.role"] = data.authorRole;
      if (data.authorAvatar) updatePayload["author.avatar"] = data.authorAvatar;
      delete updatePayload.authorName;
      delete updatePayload.authorRole;
      delete updatePayload.authorAvatar;
    }

    const updated = await Post.findByIdAndUpdate(id, { $set: updatePayload }, { new: true });

    if (!updated) {
      return { success: false, error: "Post not found" };
    }

    revalidatePath("/blogs");
    revalidatePath(`/blogs/${updated.slug}`);
    revalidatePath("/admin/blogs");

    return { success: true };
  } catch (error: unknown) {
    console.error("Error updating blog post:", error);
    const message = error instanceof Error ? error.message : "Failed to update blog post";
    return { success: false, error: message };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await connectToDatabase();
    await Post.findByIdAndDelete(id);

    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");

    return { success: true };
  } catch (error: unknown) {
    console.error("Error deleting blog post:", error);
    const message = error instanceof Error ? error.message : "Failed to delete blog post";
    return { success: false, error: message };
  }
}

export async function togglePublishStatus(id: string) {
  try {
    await connectToDatabase();
    const post = await Post.findById(id);
    if (!post) return { success: false, error: "Post not found" };

    post.published = !post.published;
    await post.save();

    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");

    return { success: true, published: post.published };
  } catch (error: unknown) {
    console.error("Error toggling publish status:", error);
    const message = error instanceof Error ? error.message : "Failed to toggle status";
    return { success: false, error: message };
  }
}
