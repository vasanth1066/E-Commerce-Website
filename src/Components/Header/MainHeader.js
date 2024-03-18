import { Nav, Navbar } from "react-bootstrap";
import React from "react";

const MainHeader = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center " size="lg">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainHeader;
