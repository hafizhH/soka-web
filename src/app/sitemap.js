import { getAllPostIds } from "./lib/post"
 
export default async function sitemap() {
  const postIds = await getAllPostIds()
  const posts = postIds.map(({ postId, lastModified }) => ({
    url: `${process.env.NEXT_URI}/posts/${postId}`,
    lastModified: lastModified
  }));
 
  const routes = ['', '/profil', '/artikel', '/posts', '/ormas', '/potensi', '/kontak'].map((route) => ({
    url: `${process.env.NEXT_URI}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts];
}