import { getPostData } from "@/api/posts";
import React from "react";

export default async function Postpage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // 1. 전달된 slug에 해당하는 포스트 데이터를 읽어와서
  // 2. 데이터를 마크다운 뷰어에 표기하기
  const post = await getPostData(slug);
  return (
    <section className="p-8 sm:p-20">
      <h1 className="font-bold text-3xl">{post.title}</h1>
      <pre className="">{post.content}</pre>
    </section>
  );
}
