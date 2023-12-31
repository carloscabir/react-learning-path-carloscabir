import React from "react";

export const ProductItem = ({ data, addToCart }) => {
  const { id, name, price } = data;

  return (
    <div
      style={{
        border: "thin solid white",
        margin: "1rem",
        textAlign: "left",
        padding: "2rem",
      }}
    >
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};
