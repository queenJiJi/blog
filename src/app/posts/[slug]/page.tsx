import { getPostData } from "@/api/posts";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import Image from "next/image";
import React from "react";

export default async function Postpage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostData(slug);
  const { title, path, prev, next } = post;
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="previous" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
