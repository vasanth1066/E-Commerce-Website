import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [showcart, setShowcart] = useState(false);

  const handlerCartClick = () => {
    setShowcart(true);
  };
  return (
    <CartProvider>
      <Header onClick={handlerCartClick}></Header>
      <Display />
      {showcart && <Cart />}
    </CartProvider>
  );
}

export default App;
