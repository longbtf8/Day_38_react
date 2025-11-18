import PropTypes from "prop-types";
import { useReducer } from "react";
import CartContext from "./Context";
import reducer from "../../pages/ShoppingCart/reducer";
import ACTIONS from "../../pages/ShoppingCart/constant";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const Provider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
  const values = {
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalPrice: cart.totalPrice,
    addToCart: (product) => {
      dispatch({
        type: ACTIONS.ADD_TO_CART,
        payload: product,
      });
    },
    removeFromCart: (productId) => {
      dispatch({
        type: ACTIONS.REMOVE_FROM_CART,
        payload: productId,
      });
    },
    updateQuantity: (productId, quantity) => {
      dispatch({
        type: ACTIONS.UPDATE_QUANTITY,
        payload: {
          productId,
          quantity,
        },
      });
    },
    clearCart: () => {
      dispatch({
        type: ACTIONS.CLEAR_CART,
      });
    },
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
Provider.propTypes = {
  children: PropTypes.element,
};
export default Provider;
