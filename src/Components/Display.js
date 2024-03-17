import React, { useContext, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import CartContext from "./Store/CartContext";

const Display = () => {
  const [addproduct, setAddproduct] = useState("");
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },

    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },

    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
  ];

  const cartcontxt = useContext(CartContext);

  const onAddItemToCart = (e) => {
    const items = {
      id: e.id,
      title: e.title,
      price: e.price,
      imageUrl: e.imageUrl,
      quantity: e.quantity,
    };
    setAddproduct([...addproduct, items]);
    cartcontxt.addItem({ items });
    console.log(items);
  };
  return (
    <Container>
      <Row>
        {productsArr.map((item, key) => (
          <Col key={key} xs={12} md={3} ig={6} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>{item.price}</Card.Title>
                <Button
                  className="justify-content-end"
                  onClick={() => onAddItemToCart(item)}
                >
                  Add
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Display;
