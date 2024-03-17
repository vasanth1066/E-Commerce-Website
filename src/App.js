import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
function App() {
  const [showcart, setShowcart] = useState(false);

  const handlerCartClick = () => {
    setShowcart(true);
  };
  return (
    <div>
      <Header onClick={handlerCartClick}></Header>
      <Display />
      {showcart && <Cart />}
    </div>
  );
}

export default App;
