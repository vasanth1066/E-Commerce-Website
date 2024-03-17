import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const itemIndex = items.findIndex(
      (cartItem) => cartItem.items.id === item.items.id
    );

    if (itemIndex !== -1) {
      alert("Item already added to cart");
      return;
    }

    setItems([...items, { ...item, quantity: 1 }]);
  };

  const removeItemFromCartHandler = (id) => {
    setItems(items.filter((item) => item.items.id !== id));
  };
  const decreaseItemFromCartHandler = () => {};

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    decreaseQuantity: decreaseItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
