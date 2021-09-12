import Head from "next/head";
import Link from "next/link";
import { Dropdown, Menu, Container, Grid } from "semantic-ui-react";
import Footer from "./Footer";

function MainLayout({ children, title = "Next app" }) {
  const activeItem = "home";
  const handleItemClick = () => {};
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, javascript, next js"></meta>
        <meta name="description" content="this is pur website"></meta>
        <meta charSet="utf-8"></meta>
      </Head>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <h2>Блог</h2>
            </Grid.Column>
            <Grid.Column width={12}>
              <Menu pointing secondary>
                <Menu.Item
                  name="messages"
                  active={activeItem === "messages"}
                  onClick={handleItemClick}
                >
                  <Link href="/">
                    <a>О Блоге</a>
                  </Link>
                </Menu.Item>

                <Menu.Item
                  name="friends"
                  active={activeItem === "friends"}
                  onClick={handleItemClick}
                >
                  <Link href="/about">
                    <a>Разработка IT</a>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  name="friends"
                  active={activeItem === "friends"}
                  onClick={handleItemClick}
                >
                  <Link href="/about">
                    <a>Продажи</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/">
                    <a>Подборка персоналов</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/about">
                    <a>Реклама</a>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link href="/posts">
                    <a>UX|UI дизайн</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/*}
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
  */}
        <main>{children}</main>
        {/*}
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
      */}
      </Container>
      <div
        style={{
          position: "fixed",
          left: "0px",
          bottom: "0px",
          width: "100%",
          color: "white",
          textAlign: "center",
        }}
      >
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
