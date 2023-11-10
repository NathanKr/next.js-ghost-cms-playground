import { GetStaticProps, NextPage } from "next";
import IPost from "@/types/i-post";
import { getPosts } from "@/logic/server/utils";
import Link from "next/link";

interface IProps {
  posts: IPost[];
}

export const getStaticProps : GetStaticProps = async () => {
  let props: IProps = { posts: [] };

  props.posts = await getPosts();

  return {
    props, // will be passed to the page component as props
  };
}

const Home: NextPage<IProps> = ({ posts }) => {
  const elemPosts = posts.map((post,i) => (
    <li key={i}>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <>
      <main>
        <h2>Welcome to my blog</h2>
        <h3>My posts : </h3>
        <ul>{elemPosts}</ul>
      </main>
    </>
  );
};

export default Home;
