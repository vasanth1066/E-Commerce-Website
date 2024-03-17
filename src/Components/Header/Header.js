import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import Cart from "../Cart/Cart";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#" className="w-50  justify-content-end">
        Shopping
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Store</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Cart />
    </Navbar>
  );
};
export default Header;
