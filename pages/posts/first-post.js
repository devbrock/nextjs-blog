import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <h1>My first post!</h1>
      </div>
    </Layout>
  );
};

export default FirstPost;
