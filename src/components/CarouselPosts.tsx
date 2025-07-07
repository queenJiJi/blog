import { getNotFeaturedPosts } from "@/api/posts";
import React from "react";
import PostCard from "./PostCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getNotFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-4"> You may also Like..</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
