import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  let params = useParams();
  // console.log(params);
  let { username, age } = useParams();
  return (
    <div>
      <h3>Perfil del usuario</h3>
      <p>
        Nombre del Usuario: <b>{username}</b> con edad {age}
      </p>
    </div>
  );
};
