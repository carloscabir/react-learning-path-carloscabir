import React, { Component } from "react";

// Heredacion de propiedades de un nodo HIJO a un nodo padre por asi decirlo, esto se simplifica con Hooks pero debido a interactividad de este ejercicio se hara de esta forma.
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  );
}

export default class Estado extends Component {
  // Creacion de constructor junto a la extension super() de nuestra extension (valga la redundancia) junto a el State (estado)
  state = {
    contador: 0,
  };

  constructor(props) {
    super(props);

    // Intervalo para cambiar el estado, ojo, estamos cambiando el estado con un  Hook (si es que no me equivoco) para cumplir las tres reglas del estado (inmutable, no se puede modificar directamente, es asincrono); la cual hara esto por nosotros.

    setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      });
    }, 1000);
  }

  // Renderizado del estado junto al componente creado con aterioridad pasandole la prop del estado para la heredacion antes explicada.

  render() {
    return (
      <div>
        <h2>El State</h2>

        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}
