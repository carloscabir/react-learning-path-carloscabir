import React from "react";
import PropTypes from "prop-types";

// Propiedades que se definiran en la llamada del componente en la Aplicacion.

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "true" : "false"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " " + props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

/* Propiedades por defecto! */
Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

/* Propiedades al estilo de TypeScript (estrictas) */
Propiedades.propTtpes = {
  numero: PropTypes.number,
};
