import ACTIONS from "./constant";

const calculateTotals = (items) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
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

    default:
      break;
  }
};
export default reducer;
