import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART called", action);
      return [action.data, ...data]; // current data and Last Data

    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART called", action);
      data.length = data.length? data.length - 1:[]; //if there is nothing in the cart it will 
      //throw and eror in the console so we used ? operator for checking the lenght of the cart
      return [...data];

    case EMPTY_CART:
      console.warn("EMPTY_CART called", action);
      data=[] //Every item will be removed from the cart
      return [...data];

    default:
      return data;
  }
};
