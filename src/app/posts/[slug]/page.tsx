import { getPostData } from "@/api/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import Image from "next/image";
import React from "react";
import { AiTwotoneCalendar } from "react-icons/ai";

export default async function Postpage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-8 sm:p-20">
        <div className="flex items-center self-end text-sky-600">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="text-xl fond-bold">{description}</p>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
        <div>
          <MarkdownViewer content={content} />
        </div>
      </section>
    </article>
  );
}
