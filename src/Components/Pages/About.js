import React from "react";

import MainHeader from "../Header/MainHeader";
import { Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Footer from "../Header/Footer";
const About = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <Navbar bg="secondary" expand="lg" variant="dark">
        <Navbar.Text
          href="#"
          className="align-items-center justify-content-center text-center"
          style={{
            fontSize: "40px",
            color: "white",
          }}
        >
          The Generics
        </Navbar.Text>
      </Navbar>

      <h1
        style={{
          padding: "10px",
          textAlign: "center",
          justifyContent: "center",
          fontSize: "30px",
          fontFamily: "cursive",
        }}
      >
        About
      </h1>

      <center>
        <Image
          src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            width: "80%",
            padding: "40px",
            textAlign: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          Single-page applications gaining popularity over the last few years,
          so many front-end frameworks have introduced such as Angular, React,
          Vue.js, Ember, etc. As a result, jQuery is not a necessary requirement
          for building web apps. Today, React has the most used JavaScript
          framework for building web applications, and Bootstrap become the most
          popular CSS framework. So, it is necessary to learn various ways in
          which Bootstrap can be used in React apps, which is the main aim of
          this section. The React Bootstrap package is the most popular way to
          add bootstrap in the React application. There are many Bootstrap
          packages built by the community, which aim to rebuild Bootstrap
          components as React components. The two most popular Bootstrap
          packages are: react-bootstrap: It is a complete re-implementation of
          the Bootstrap components as React components. It does not need any
          dependencies like bootstrap.js or jQuery. If the React setup and
          React-Bootstrap installed, we have everything which we need.
          reactstrap: It is a library which contains React Bootstrap 4
          components that favor composition and control. It does not depend on
          jQuery or Bootstrap JavaScript. However, react-popper is needed for
          advanced positioning of content such as Tooltips, Popovers, and
          auto-flipping Dropdowns.
        </div>
      </center>

      <Footer pagename="About"></Footer>
    </>
  );
};

export default About;
