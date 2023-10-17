import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  // let superNumero = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }
  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }

    return numero;
  }, []);
  ls;

  console.log("contador hijo renderizado");
  return (
    <div
      style={{
        border: "thin solid black",
        padding: "2rem",
        backgroundColor: "thistle",
        margin: "auto",
        width: "50vw",
      }}
    >
      <h2>Contador Hijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
