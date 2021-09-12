import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import { Button } from "semantic-ui-react";

function Home() {
  return (
    <>
      <MainLayout title={"Home page"}>
        <p>
          <Link href="/about">
            <a>about</a>
          </Link>
        </p>
        <p>
          <Link href="/posts">posts</Link>
        </p>
        <Button>Click Here</Button>
      </MainLayout>
    </>
  );
}

export default Home;
