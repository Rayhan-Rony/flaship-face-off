import { useEffect, useState } from "react";

import React from "react";
import { CartContext } from "./Context";
import { getCarts } from "../Utilitys/LocalStorage";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(getCarts());
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
