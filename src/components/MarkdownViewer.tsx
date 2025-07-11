import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <article className="prose max-w-none lg:prose-xl">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter language="tsx" style={oneDark} PreTag="div">
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                {children}
              </code>
            );
          },
          img: (image) => (
            <Image
              className="w-full max-h-60 object-cover"
              src={image.src || ""}
              alt={image.alt || ""}
              width={500}
              height={350}
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}
