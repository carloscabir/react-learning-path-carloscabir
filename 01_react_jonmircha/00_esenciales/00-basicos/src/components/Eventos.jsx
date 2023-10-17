import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // Enlazamos el this de la clase, para que nuestra funcion este en este contexto, de lo contrario no cambiaremos nuestro estado (formas de enlazar this vistas en el curso de jonmircha de js)
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    // console.log("Sumando");
    // console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
    // console.log(e);
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

// Properties Initializer ES7

export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  // Events how an Arrow Function without bind()
  // this is more simplified

  sumar = (e) => {
    // console.log("Sumando");
    // console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
    // console.log(e);
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

// Eventos Nativos, Sinteticos & Personalizados
/* 
function Boton(props) {
  return <button onClick={props.myOnClick}>Boton hecho componente</button>;
} */

// Simplificacion
/* const Boton = (props) => (
  <button onClick={props.myOnClick}>Boton hecho componente</button>
);
 */

// Destructuracion de props
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Boton hecho componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    // pq SyntheticEvent?
    // React hace su propio manejo de eventos y ademas los envuelve en esto disque para hacer soporte de ellos, y como accedemos al evento nativo del DOM?, vamos allá
    // console.log(e);
    //Evento nativo del DOM!
    // console.log(e.nativeEvent);
    // console.log(e.nativeEvent.target);
    //Supongamos que ya sabes que es esto
    // console.log(e.target);
    // Si
    // console.log(msg);
  };

  render() {
    return (
      <div>
        <h2>Mas sobre Eventos</h2>
        <button
          // Como pasar un parametro en un manejador de eventos?
          // recuerda que el manejador de eventos AHORA es la AF, pues ya xd
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        >
          Saludar
        </button>
        {/*  <Boton
          // Por que no sirve el evento?
          // Esta no es una etiqueta JSX, es un Componente. Tendremos que hacer uso de un Evento Personalizado 
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        /> */}
        {/* 
          Lo arreglaremos con unas props! desde nuestro COMPONENTE
        */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        />
      </div>
    );
  }
}
