import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import { CicloVida } from "./components/CicloVIda";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/Ajaxhooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          {/* Primer componente con una Prop basica */}
          <Componente msg="Hola soy un componente funcional expresado" />
          <hr />
          {/*  Diferentes tipos de Props con su sintaxis correcta por asi decirlo */}
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={10}
            // Recuerda que un true no marcara como una cadena de texto a true, pero haremos un condicional en el archivo del componente
            booleano={true}
            arreglo={[1, 2, 3]}
            // Necesitaras acceder a las props del objeto
            objeto={{ nombre: "carlos", apellido: "cabi" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento de React</i>}
            /* Podemos reutilizar componentes en propiedades! */
            componenteReact={
              <Componente msg="Soy un componente pasado como prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks titulo="Seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
          <br />
          <br />
          <br />
        </section>
      </header>
    </div>
  );
}

export default App;
