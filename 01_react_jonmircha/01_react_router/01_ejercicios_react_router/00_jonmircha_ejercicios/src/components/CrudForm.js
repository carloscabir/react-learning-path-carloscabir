import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  song: "",
  id: null,
};

export const CrudForm = ({
  createData,
  updateData,
  setDataToEdit,
  dataToEdit,
  redirect,
}) => {
  const [form, setForm] = useState(initialForm);
  // const [isSent, setIsSent] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.song) {
      alert("Por favor inserta todos los datos. Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();

    if (redirect) navigate(redirect);
    // setIsSent(true);
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="crud-form">
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="song"
          placeholder="Cancion"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
      {/* {redirect ? isSent ? <Navigate to={redirect} /> : "" : ""} */}
    </div>
  );
};
