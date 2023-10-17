import React, { useState } from "react";

// Hooks useState.

export default function ContadorHooks(props) {
  // Forma en la que se nos recomienda llamar y usar useState (clave-valor, funcion) yyy del otro lado su valor por defecto (o inicial)
  const [contador, setContador] = useState(0);
  const [counter, setCounter] = useState(0);

  const sum = () => setCounter(counter + 1);
  const less = () => setCounter(counter - 1);
  // console.log(useState());

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <p>Contador de {props.titulo}</p>
      <h3>{contador}</h3>
      <h4>Contador barato de carlos</h4>
      <nav>
        <button onClick={less}>-</button>
        <button onClick={sum}>+</button>
      </nav>
      <h3>{counter}</h3>
    </>
  );
}

// Holy

// Tambien se pueden pasar propiedades por defecto por si acaso.
// Si es que no recuerdas estas funcionan cuando es la llamada del componente y no trae ninguna prop, pues esta va por defecto. En cambio se reemplaza por la pasada en la llamada del componente (redundante)
ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
