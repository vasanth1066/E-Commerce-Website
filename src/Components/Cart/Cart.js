import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

function Cart() {
  const [cartElements, setCartElements] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeItemHandler = (keys) => {
    const updatedCart = [...cartElements];
    if (updatedCart[keys].quantity > 1) {
      updatedCart[keys].quantity -= 1;
    } else {
      updatedCart.splice(keys, 1);
    }
    setCartElements(updatedCart);
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Cart Items
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive striped bordered hover size="lg">
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.map((items, keys) => (
                <tr key={keys}>
                  <td>
                    <Image
                      src={items.imageUrl}
                      style={{ width: "70px", height: "70px" }}
                    />
                  </td>
                  <td>{items.title}</td>
                  <td>Rs-{items.price}</td>
                  <td>{items.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeItemHandler(keys)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Buy</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
