import ACTIONS from "./constant";

const calculateTotals = (items) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice = Math.floor(totalPrice + item.price * item.quantity);
  });
  return {
    totalQuantity,
    totalPrice,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      let newItems;
      if (existingItem) {
        newItems = state.items.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        newItems = [...state.items, { ...product, quantity: 1 }];
      }
      const { totalPrice, totalQuantity } = calculateTotals(newItems);
      return {
        items: newItems,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
      };
    }
    case ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;

      const newItems = state.items.map((item) => {
        if (item.id === productId) {
          let newQuantity = (item.quantity += quantity);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      const { totalPrice, totalQuantity } = calculateTotals(newItems);

      return {
        items: newItems,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
      };
    }
    case ACTIONS.REMOVE_FROM_CART: {
      const productId = action.payload;
      const idx = state.items.findIndex((item) => item.id === productId);
      if (idx === -1) {
        return state;
      }
      const newItems = [...state.items];
      newItems.splice(idx, 1);
      const { totalPrice, totalQuantity } = calculateTotals(newItems);

      return {
        items: newItems,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
      };
    }
    case ACTIONS.CLEAR_CART: {
      return {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    }
    default: {
      throw new Error("type cart invalid ");
    }
  }
};
export default reducer;
