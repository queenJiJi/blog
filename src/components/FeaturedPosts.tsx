import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "@/api/posts";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section>
      <h2 className="text-2xl font-bold my-2">Fetured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
