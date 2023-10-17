import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

export const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      window.alert("Datos Incompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cancion"
          name="song"
          onChange={handleChange}
          value={form.song}
        />
        <input
          type="text"
          placeholder="Artista"
          name="artist"
          onChange={handleChange}
          value={form.artist}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};
