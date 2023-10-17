import React from "react";
import { useNavigate } from "react-router-dom";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, song, id } = el;
  let navigate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(el);
    navigate(`/artists/edit/${id}`);
  };

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{song}</td>
        <td>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => deleteData(id, name)}>Eliminar</button>
        </td>
      </tr>
    </div>
  );
};
