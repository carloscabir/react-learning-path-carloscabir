import React, { useReducer } from "react";
import { TYPES } from "../actions/shopping.actions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shopping.reducer";
import { CartItem } from "./CartItem";
import { ProductItem } from "./ProductItem";

export const ShopingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart, resultOfCart } = state;

  const addToCart = (id) => {
    console.log(id);
    return dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  const delFromCart = (id, delAll = false) => {
    if (delAll) {
      return dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    }
    return dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  const clearCart = () => {
    return dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem data={product} key={product.id} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, i) => (
          <CartItem key={i} data={item} delFromCart={delFromCart} />
        ))}
        <hr />
        <h2>
          <mark>Total:</mark>{" "}
        </h2>
        <h3>{resultOfCart}</h3>
      </article>
    </div>
  );
};
