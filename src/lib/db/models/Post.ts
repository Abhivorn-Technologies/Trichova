import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface IPost extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: IAuthor;
  published: boolean;
  readTime: string;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const AuthorSchema = new Schema<IAuthor>({
  name: { type: String, required: true },
  role: { type: String, required: true, default: "Trichologist & Hair Specialist" },
  avatar: { type: String, required: true, default: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop" },
});

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, required: true },
    category: { type: String, required: true, default: "Hair Health" },
    author: { type: AuthorSchema, required: true },
    published: { type: Boolean, default: true },
    readTime: { type: String, default: "5 min read" },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
