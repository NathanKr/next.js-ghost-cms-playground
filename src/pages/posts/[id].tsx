import { getPost } from "@/logic/server/utils";
import IPost from "@/types/i-post";
import { GetServerSideProps, NextPage } from "next";

interface IProps {
  post: IPost | undefined;
}

// --- todo nath getStaticProps + getStaticPaths will be better ??
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as any;

  let props: IProps = {
    post: undefined,
  };
  props.post = await getPost(id);

  return {
    props, // will be passed to the page component as props
  };
};

const Page: NextPage<IProps> = ({ post }) => {
  return post ? (
    <div dangerouslySetInnerHTML={{ __html: post!.html }}></div>
  ) : (
    <div>post is undefined</div>
  );
};

export default Page;
