import IPost from "@/types/i-post";
import IRootPostObject from "@/types/i-root-post-object";
import axios from "axios";

const {GHOST_API_URL,GHOST_CONTENT_API_KEY} = process.env

export async function getPosts(): Promise<IPost[]> {
  const url = `${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}`;
  
  const res = await axios.get(url);
  const root : IRootPostObject = res.data;

  return root.posts;
}

export async function getPost(id : string): Promise<IPost> {
  const url = `${GHOST_API_URL}/ghost/api/content/posts/${id}?key=${GHOST_CONTENT_API_KEY}`;;
  
  const res = await axios.get(url);
  const root : IRootPostObject = res.data;
  const post = root.posts[0]

  return post;
}
