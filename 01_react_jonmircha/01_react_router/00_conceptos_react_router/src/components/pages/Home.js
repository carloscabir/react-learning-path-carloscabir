import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="menu-concepts">Conceptos de Menu's</Link>
      <h2>Bienvenido a los conceptos basicos sobre React Router</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestias
        rerum illo, hic recusandae consequatur eligendi sed, reprehenderit enim
        officia debitis odit molestiae vel. Repellat accusantium non nihil
        deserunt tenetur!
      </p>
    </div>
  );
};
