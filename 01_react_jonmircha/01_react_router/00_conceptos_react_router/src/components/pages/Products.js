import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Products = () => {
  // let location = useLocation();
  // console.log(location);

  let { search } = useLocation();
  let query = new URLSearchParams(search);

  // console.log(query);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("final")) || LIMIT;
  // console.log(start, end);

  let navigate = useNavigate();
  // console.log(navigate);

  const handlePrev = () => {
    navigate(`/products?inicio=${start - LIMIT}&final=${end - LIMIT}`);
  };

  const handleNext = () =>
    navigate(`/products?inicio=${start + LIMIT}&final=${end + LIMIT}`);

  return (
    <div>
      <h2>Productos</h2>
      <p>
        Mostrando productos del <b>{start}</b> al <b>{end}</b>
        {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
        <button onClick={handleNext}>Adelante</button>
      </p>
    </div>
  );
};
