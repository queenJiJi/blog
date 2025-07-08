import { getAllPosts } from "@/api/posts";
import FilterablePosts from "@/components/FilterablePosts";
import React from "react";

export default async function Postspage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section>
      <FilterablePosts categories={categories} posts={posts} />
    </section>
  );
}
