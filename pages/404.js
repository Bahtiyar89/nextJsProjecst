import Link from "next/link";
import MainLayout from "../components/MainLayout";
import classes from "../styles/error.module.css";

function ErrorPage() {
  return (
    <>
      <MainLayout>
        <h1 className={classes.error}>Error 404</h1>
        <p>
          Hi go{" "}
          <Link href="/">
            <a>back</a>
          </Link>
        </p>
      </MainLayout>
    </>
  );
}

export default ErrorPage;
