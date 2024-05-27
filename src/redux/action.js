import {  ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART } from "./constant";


export const addToCart = (data) => {
  console.warn("Add to Cart is called", data);
  return {
    type: ADD_TO_CART,  //Must Have A TYPE in Return Statement
    data
  };
};
export const removeToCart = (data) => {
  console.warn("Remove from Cart is Called", data);
  return {
    type: REMOVE_FROM_CART,  //Must Have A TYPE in Return Statement
    data
  };
};
export const emptyToCart = () => {
  console.warn("Empty Cart is called");
  return {
    type: EMPTY_CART,  //Remove data from the parameter
  };
};
