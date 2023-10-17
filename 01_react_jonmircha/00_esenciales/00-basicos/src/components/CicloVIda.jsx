import React, { Component } from "react";

class Reloj extends Component {
  render() {
    return <h3>{this.props.hora}</h3>;
  }

  // Desmontaje
  componentWillUnmount() {
    // console.log(3, "El componente ha sido eliminado del DOM");
  }
}

/* 
El ciclo de vida de un Componente tiene 3 fases
- Montaje
- Actualizacion
- Desmontaje (arriba)
*/

export class CicloVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se inicializa, ojo, aun NO esta en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    // Variable intervalo (para limpiar esta)
    this.temporizador = null;
  }

  // Todos estos ciclos se ejecutaran FUERA del constructor
  // Montaje
  componentDidMount() {
    // console.log(1, "El componente YA se encuentra en el DOM");
  }

  // Actualizacion
  componentDidUpdate(prevProps, prevState) {
    // console.log(2, "El estado o las props han cambiado");
    // console.log(prevProps);
    // console.log(prevState);
  }

  // Metodos
  // Metodo (intervalo del reloj)
  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  // Iniciar nuestro intervalo
  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  // Detener intervalo
  detener = () => {
    clearInterval(this.temporizador);

    this.setState({
      visible: false,
    });
  };

  render() {
    // console.log(4, "El componente se dibuja por algun cambio en el DOM");

    return (
      <>
        <h2>Ciclo de vida de los componentes de clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </>
    );
  }
}
