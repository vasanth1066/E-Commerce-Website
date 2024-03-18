import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Display from "../Display";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import CartProvider from "../Store/CartProvider";
import MainHeader from "../Header/MainHeader";

const Store = () => {
  const [showcart, setShowcart] = useState(false);

  const handlerCartClick = () => {
    setShowcart(true);
  };
  return (
    <>
      <CartProvider>
        <MainHeader />
        <Header onClick={handlerCartClick} heading={"Shoping"}></Header>
        <Display />
        {showcart && <Cart />}
      </CartProvider>
    </>
  );
};
export default Store;
