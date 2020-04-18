import React from "react";
import Nav from "./Nav";
import '../styles/css/style.css'
import '../styles/sass/home.scss'

const Layout = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
};

export default Layout;
