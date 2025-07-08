import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export async function getFeaturedPosts(): Promise<Post[]> {
  // featured True인 포스트만 가져오기
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNotFeaturedPosts(): Promise<Post[]> {
  // featured False 포스트만 가져오기
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  // 모든 포스트들 가져오기
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metaData = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metaData) {
    throw new Error(`${fileName}에[ 해당하는 포스트를찾을 수 없습니다.`);
  }

  const content = await readFile(filePath, "utf-8");
  return { ...metaData, content };
}
