import { Navbar } from "react-bootstrap";
import React from "react";
import Cart from "../Cart/Cart";
const Header = (props) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#" className="w-50  justify-content-center">
        {props.heading}
      </Navbar.Brand>
      <Navbar className="w-50  justify-content-end">
        <Cart />
      </Navbar>
    </Navbar>
  );
};
export default Header;
