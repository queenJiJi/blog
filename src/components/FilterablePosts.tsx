"use client";

import { Post } from "@/api/posts";
import React, { useState } from "react";
import PostsGrid from "./PostsGrid";
import Categories from "./Categories";

export default function FilterablePosts({
  categories,
  posts,
}: {
  categories: string[];
  posts: Post[];
}) {
  const ALL_POSTS = "All Posts";
  const [selectedCategory, setSelectedCategory] = useState(ALL_POSTS);

  const filtered =
    selectedCategory === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selectedCategory={selectedCategory}
        onClick={(category) => setSelectedCategory(category)}
      />
      <PostsGrid posts={filtered} />
    </section>
  );
}
