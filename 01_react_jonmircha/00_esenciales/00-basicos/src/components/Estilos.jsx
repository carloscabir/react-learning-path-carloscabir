import React from "react";
import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

export default function Estilos() {
  // Otra forma de hacerlo solo llamando al objeto en la etiqueta style
  let myStyles = {
    margin: "2rem",
    backgroundColor: "#ccc",
    padding: "1rem",
    color: "black",
  };
  return (
    <>
      <section className="estilos">
        <h2>Estilos en React</h2>
        <h3 className="bg-react">Estilos en Hoja CSS Externa</h3>
        <h3
          style={{
            backgroundColor: "thistle",
            color: "black",
            borderRadius: "2rem",
            margin: "1rem",
          }}
        >
          Estilos en Linea
        </h3>
        <h3 style={myStyles}>Estilos en Linea con Interpolacion (objeto) </h3>
        <h3>Agregando Normalize.com</h3>
        {/* Tambien con la hoja de estilos normalize (importandola en el index de este create-react-app xd) */}
        <code>@import-normalize</code>
        <h3 className={moduleStyles.success}>Estilos con Modulos</h3>
        <h3 className={moduleStyles.error}>Estilos con Modulos</h3>
        <h3 className="bg-sass">Estilos con SASS</h3>
      </section>
    </>
  );
}
