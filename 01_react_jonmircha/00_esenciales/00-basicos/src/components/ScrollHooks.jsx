import React, { useState, useEffect } from "react";

// se pueden usar cuantos quieras de useEffect

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  // Si vas a trabajar con un componente el cual trabaja junto al DOM, se recomienda agregar esta variable del estado a tu lista de dependencias del useEffect. Es decir, este objeto se va a actualizar solo cuando la variable tenga efectos
  // Fase de acutalizacion (componentDidUpdate)
  useEffect(() => {
    // console.log("Moviendo el Scroll");

    const detectarScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", detectarScroll);

    // con esto nos encargaremos dejar de hacer un proceso, algo que es super optimo para el rendimiento de nuestra aplicacion
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  // Para trabajar la fase de montaje (componentDidMount) con Hooks - useEffect, debemos dejar la lista de dependencias vacias, esto siendo lo que recomienda React. (a lista de dependencias me refiero al array vacio (segundo parametro de useEffect))
  // Fase de montaje (componentDidMount)
  useEffect(() => {
    // console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    // console.log("Fase de Actualizacion");
  });

  // Simulacion de fase de Desmontaje del efecto
  // Solo se aplica una funcion de retorno y el algoritmo de React se percatara de que lo que queremos hacer es desmontar este efecto
  // Fase de desmontaje (componentDidUnmount)
  useEffect(() => {
    return () => {
      // console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}
