import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { ProductItem } from "./ProductItem";
import {
  addToCartAction,
  clearCartAction,
  delFromCartAction,
} from "../actions/shoppingCartActions";

export const ShopingCart = () => {
  const state = useSelector((state) => state);
  const { products, cart, resultOfCart } = state.shopping;
  const dispatch = useDispatch();

  const addToCart = (id) => {
    return dispatch(addToCartAction(id));
  };

  const delFromCart = (id, delAll = false) => {
    if (delAll) {
      return dispatch(delFromCartAction(id, delAll));
    }
    return dispatch(delFromCartAction(id));
  };

  const clearCart = () => {
    return dispatch(clearCartAction());
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
