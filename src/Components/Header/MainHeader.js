import { Nav, Navbar } from "react-bootstrap";
import React from "react";

const MainHeader = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark" style={{ color: "white" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center ">
          <Nav style={{ fontSize: "25px" }}>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainHeader;
