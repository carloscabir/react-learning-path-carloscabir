import React from "react";
import { useForm } from "../hooks/useForm";
import { Loader } from "./Loader";
import { Message } from "./Message";

const intialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name)) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email)) {
    errors.name = "El campo 'Email' no es valido";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments)) {
    errors.comments =
      "El campo 'Comentarios' solo acepta 255 caracteres como maximo";
  }

  return errors;
};

export const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(intialForm, validationsForm);

  let styles = {
    fontWeight: "bold",
    backgroundColor: "thistle",
    color: "#000",
    padding: ".5rem",
    margin: "0 0 0 .5rem",
    textAlign: "center",
    fontSize: "110%",
    width: "80%",
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          value={form.name}
          required
          onBlur={handleBlur}
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          value={form.email}
          required
          onBlur={handleBlur}
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          value={form.subject}
          required
          onBlur={handleBlur}
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onChange={handleChange}
          value={form.comments}
          required
          onBlur={handleBlur}
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" onSubmit={handleSubmit} />
      </form>
      {loading && <Loader />}
      {response && (
        <Message
          msg="Los datos han sido enviados con exito"
          bgColor="thistle"
        />
      )}
    </div>
  );
};
