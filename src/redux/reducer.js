import { ADD_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART called", action);
      return [action.data, ...data]  // current data and Last Data
    default:
      return []
  }
};
