import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function useCart() {
  const Context = useContext(CartContext);
  if (Context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  return Context;
}
export default useCart;
