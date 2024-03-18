import { Navbar, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Footer = (props) => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home">{props.pagename} Page</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Follow as on</Navbar.Text>
          <div>{"---"}</div>
          <Image
            src="https://help.runcfs.com/hubfs/Smart%20Objects/smart56.2.png"
            style={{
              width: "150px",
              height: "auto",
            }}
          ></Image>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Footer;
