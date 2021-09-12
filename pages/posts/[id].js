import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";

function Post({ post: serverPost }) {
  const [post, seTpost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4900/posts/${router.query.id}`
      );
      const data = await response.json();
      seTpost(data);
    }
    // if from server comes null then we make req from  frontend
    if (!serverPost) {
      load();
    }
  }, []);

  //if is still loading
  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts">
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  );
}

export default Post;

//req from server not client
export async function getServerSideProps({ query, req }) {
  //if we in frontend & not a req
  if (!req) {
    return { post: null };
  }
  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post = await response.json();

  return {
    props: { post }, // will be passed to the page component as props
  };
}
