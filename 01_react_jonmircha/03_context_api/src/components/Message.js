import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

export const Message = ({ bgColor }) => {
  const { error } = useContext(CrudContext);

  const msg = `Error ${error.status}: ${error.statusText}`;

  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    backgroundColor: bgColor,
    color: "#fff",
    fontWeight: "bold",
    borderRadius: ".3rem",
  };
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};
