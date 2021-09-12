import { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import Link from "next/link";

export default function Posts({ posts: serverPosts }) {
  const [posts, seTposts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4900/posts");
      const data = await response.json();
      seTposts(data);
    }
    // if from server comes null then we make req from  frontend
    if (!serverPosts) {
      load();
    }
  }, []);

  //if is still loading
  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <>
      <MainLayout>
        <Head>
          <title>Next title index</title>
        </Head>
        <h1>Posts page</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </MainLayout>
    </>
  );
}

Posts.getInitialProps = async ({ req }) => {
  if (!req) {
    return { posts: null };
  }

  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts = await response.json();
  return { posts };
};
