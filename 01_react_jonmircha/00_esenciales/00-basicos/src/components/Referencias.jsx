import React, { createRef, useRef } from "react";

// Las referencias funcionan tanto como para componentes de Clase y Funcional.
// Cabe a aclarar que tenemos un Hook para usar las referencias con los componentes funcionales (o Hooks)
/* 
Ten en cuanta cuenta para usar referencias...
  - La referencia es como un selector que ya existe, perooo, para tomar como referencia un Nodo del DOM, le asginas el atributo ref (con su respectiva referencia) 
*/

export default function Referencias() {
  let refMenu = useRef(),
    refMenuBtn = useRef();

  // console.log(refMenu.current, refMenuBtn.current);

  const handleToggleMenu = (e) => {
    // Para no hacer esto con React, los creadores de React te dan las referencias
    /*
     const $menu = document.getElementById("menu");
    if (e.target.textContent === "Menú") {
      e.target.textContent = "Cerrar";
      $menu.style.display = "block";
    } else {
      e.target.textContent = "Menú";
      $menu.style.display = "none";
    }
     */
    //
    // Referencias
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
        <br />
      </nav>
    </>
  );
}
