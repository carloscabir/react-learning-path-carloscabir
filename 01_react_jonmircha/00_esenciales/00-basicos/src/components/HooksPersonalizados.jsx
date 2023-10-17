import React from "react";
import { useFetch } from "../hooks/useFetch";

// Datos
// Nuestros Hooks los haremos en su respectiva carpeta llamada Hooks y
// Para hacer un Hook personalizado y que el algoritmo de React lo reconozca como un Hook personalizado (redundante), al nombre del archivo lo vamos a tener que escribir como lowerCamelCase NO UpperCamelCase (como los componentes), ademas que este tiene que contener la palabra "use" al inicio (al igual, para que React lo reconozca como un Hook personalizado)

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";
  url = "https://jsonplaceholder.typicode.com/users";

  let { data, isPending, error } = useFetch(url);

  // console.log(useFetch());
  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>
    </>
  );
}
