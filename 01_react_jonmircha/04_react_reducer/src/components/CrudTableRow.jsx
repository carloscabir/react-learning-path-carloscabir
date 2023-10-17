import React from "react";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, song, id } = el;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{song}</td>
        <td>
          <button
            onClick={() => {
              setDataToEdit(el);
            }}
          >
            Editar
          </button>
          <button onClick={() => deleteData(id, name)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};
