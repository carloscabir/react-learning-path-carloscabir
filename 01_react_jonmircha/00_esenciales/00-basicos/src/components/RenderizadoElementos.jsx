import React, { Component } from "react";
import data from "../helpers/data.json";

/* 
En este documento Renderizaremos elementos de forma dinamica tanto con el State y Una simulacion de una API (json), la cual como requerimiento OBLIGATORIO en el desarrollo de Renderizado de Elementos necesitaremos especificar una key (id React) para que no nos salten errores en nuestra consola de React.
Ademas de implementar por primera vez map() en React!
*/

// Componente Individual, pero por la clase...
function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer ">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    // console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {/* Podemos mandar a llamar tanto el indice o el elemento directamente como key para la consola de React, o tambien existen alternativas como librerias para generar ID's unicos  */}
          {this.state.seasons.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.framworks.map((el, i) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
