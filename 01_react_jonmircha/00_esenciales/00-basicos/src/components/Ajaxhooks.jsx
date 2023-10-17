import React, { useState, useEffect } from "react";

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  // Fetch
  /*
  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        });
      });
  }, []); // Recuerda cuando no se especifica la dependencia, cada que se renderize este componente se estaran haciendo peticiones automaticamente, algo raro

  function Pokemon({ avatar, name }) {
    return (
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  }
 */

  // fetch + async await
  // Lo que penso inmediatamente carlos fue en poner un "async" a nuestro useEffect, pero si indagas en la Documentacion de React los creadores de React consideran esto como un antipatron, por lo que debera usar lo que veras en esta funcion. (comentario grande para fines didacticos)
  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();

      // console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  function Pokemon({ avatar, name }) {
    return (
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    );
  }

  return (
    <>
      <h2>Peticiones Asíncronas con Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
