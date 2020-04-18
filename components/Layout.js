import React from "react";
import Nav from "./Nav";
import "../styles/css/style.css";
import "../styles/sass/home.scss";
import Head from "next/head";
import NavBootstrap from "./NavBootstrap";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Next.js SSR</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/journal/bootstrap.min.css"
        ></link>
      </Head>
      <NavBootstrap />
      <Nav />
      {props.children}

      <script src="https://bootswatch.com/_vendor/jquery/dist/jquery.min.js"></script>
      <script src="https://bootswatch.com/_vendor/bootstrap/dist/js/bootstrap.min.js"></script>
    </div>
  );
};

export default Layout;
