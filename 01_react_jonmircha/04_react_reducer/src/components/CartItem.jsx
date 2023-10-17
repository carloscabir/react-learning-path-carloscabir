import React from "react";

export const CartItem = ({ data, delFromCart }) => {
  const { id, name, price, quantity } = data;

  return (
    <div style={{ border: "thin solid white", margin: "1rem" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delFromCart(id)}>Eliminar uno</button>
      {quantity > 1 && (
        <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
      )}
    </div>
  );
};
