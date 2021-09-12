import Router from "next/router";
import MainLayout from "../../components/MainLayout";

function About({ title }) {
  return (
    <>
      <MainLayout title={"About page"}>
        <h1>{title}</h1>
        <button onClick={() => Router.push("posts")}>Go to posts</button>
      </MainLayout>
    </>
  );
}

About.getInitialProps = async ({ req }) => {
  if (!req) {
    return { about: null };
  }

  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();
  return { title: data.title };
};

export default About;
