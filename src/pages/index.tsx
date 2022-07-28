import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/layout/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
        <meta
          name="Amazon Clone"
          content="Full Stack amazon clone with web2 & web3 checkout"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Image
          src="https://m.media-amazon.com/images/I/61eJ7IegQGL._SX3000_.jpg/"
          alt="banner"
          width="100%"
          height="70%"
          object-fit="contain"
        />
      </main>
    </div>
  );
};

export default Home;
