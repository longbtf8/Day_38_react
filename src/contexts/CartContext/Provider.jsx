import PropTypes from "prop-types";
import CartContext from "./context";
import { useState } from "react";

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const values = {
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
Provider.propTypes = {
  children: PropTypes.element,
};
export default Provider;
