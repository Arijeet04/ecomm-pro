import {  ADD_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.warn("action is called", data);
  return {
    type: ADD_TO_CART,  //Must Have A TYPE in Return Statement
    data
  };
};