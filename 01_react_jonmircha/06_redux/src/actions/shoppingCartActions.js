import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export const addToCartAction = (id) => ({ type: ADD_TO_CART, payload: id });

export const delFromCartAction = (id, delAll = false) => {
  if (delAll) return { type: REMOVE_ALL_FROM_CART, payload: id };

  return { type: REMOVE_ONE_FROM_CART, payload: id };
};

export const clearCartAction = () => ({ type: CLEAR_CART });
