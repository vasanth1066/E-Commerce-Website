import React from "react";
import MainHeader from "../Header/MainHeader";
import { Navbar, Button } from "react-bootstrap";

import Footer from "../Header/Footer";

const Home = () => {
  const dummy = [
    {
      date: "JUL16",
      place: "DETROIT",
      add: "MI DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL19",
      place: "TORONTO",
      add: "ON BUDWEISER STAGE",
    },
    {
      date: "JUL19",
      place: "BRISTOW",
      add: "VA JIGGY LUBE",
    },
    {
      date: "JUL 22",
      place: "PHOENIX",
      add: "CA CONCORD PAVILION",
    },
  ];
  return (
    <>
      <MainHeader></MainHeader>
      <Navbar
        bg="secondary"
        expand="lg"
        variant="dark"
        className="d-flex align-items-center justify-content-center text-center"
      >
        <Navbar.Text
          href="#"
          style={{
            width: "100px,",
            height: "auto",

            fontSize: "70px",
            color: "white",
          }}
        >
          The Generics
        </Navbar.Text>
      </Navbar>
      <Navbar
        bg="secondary"
        expand="lg"
        variant="dark"
        className="d-flex align-items-center justify-content-center text-center"
      >
        <Button
          variant="outline-light"
          style={{
            fontSize: "20px",
            padding: "1px 20px",
            borderColor: "skyblue",
          }}
        >
          Get Our Latest Album
        </Button>
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
        Tours
      </h1>

      <div className=" align-items-center justify-content-center text-center">
        {dummy.map((item, key) => (
          <ul keys={key}>
            <span>{item.date}-</span>
            <span>{item.place}-</span>
            <span>
              {item.add}
              {"   "}
            </span>
            <Button variant="primary"> Buy Ticket</Button>
            <div>
              {
                "__________________________________________________________________________"
              }
            </div>
          </ul>
        ))}
      </div>

      <Footer pagename="Home"></Footer>
    </>
  );
};
export default Home;
