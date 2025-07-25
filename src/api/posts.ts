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

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

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
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) {
    throw new Error(`${fileName}에[ 해당하는 포스트를찾을 수 없습니다.`);
  }

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null; // 0이 첫번째(=가장 최근) 포스트이므로, 이전 포스트가 없다면(=현재가 가장 최근 포스트라면) null 반환
  const prev = index < posts.length - 1 ? posts[index + 1] : null; // 마지막 포스트라면 다음 포스트가 없으므로 null 반환
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}
