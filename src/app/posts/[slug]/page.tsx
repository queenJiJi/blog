import { getPostData } from "@/api/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import React from "react";

export default async function Postpage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostData(slug);
  return (
    <section className="p-8 sm:p-20">
      <h1 className="font-bold text-3xl">{post.title}</h1>
      <div>
        <MarkdownViewer content={post.content} />
      </div>
    </section>
  );
}
