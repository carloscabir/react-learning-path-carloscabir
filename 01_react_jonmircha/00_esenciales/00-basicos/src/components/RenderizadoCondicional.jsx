import React, { Component } from "react";

// Ya sabemos que podemos hacer estas funciones en diferentes componentes pero para dar mas practicidad las creamos en el mismo.
function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class RenderizadoCondicional extends Component {
  // Clase anterior sobre estado.
  constructor(props) {
    super(props);
    this.state = {
      // Prop a evaluar en el condicional
      session: false,
    };
  }

  // Renderizacion a partir del estado junto a un condicional determinando que componente se renderizara.
  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
      </div>
    );
  }
}
