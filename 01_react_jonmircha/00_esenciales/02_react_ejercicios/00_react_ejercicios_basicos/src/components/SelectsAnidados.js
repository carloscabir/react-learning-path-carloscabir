import React, { useState } from "react";

import { SelectList } from "./SelectList";

export const SelectsAnidados = () => {
  const [state, setStateM] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  let TOKEN = "e34f1a8a-b35c-47da-8c74-c2abbe667369";

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <SelectList
        title="estado"
        handleChange={(e) => {
          setStateM(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="municipios"
          url={
            state
              ? `
          https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`
              : null
          }
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={
            town
              ? `
          https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`
              : null
          }
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} _ {town} _ {suburb}
        </code>
      </pre>
      {suburb && (
        <a
          href={`https://www.google.com.mx/maps/place/${suburb} ${town} ${state}`}
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundColor: "#333",
            color: "thistle",
            padding: "2rem",
            margin: "2rem",
            fontSize: "2rem",
            borderRadius: "0.8rem",
          }}
        >
          Resultado de tu eleccion!
        </a>
      )}
    </div>
  );
};
