import React, { Component } from "react";

// FUNCIONAL EXPRESADO
const Componente = (props) => {
  return <h2>{props.msg}</h2>;
};

// FUNCIONAL
/* function Componente(props) {
  return <h2>{props.msg}</h2>;
}
 */

// JSX
/* 
class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>;
  }
} */

// Los Hooks se veran en un futuro no tan lejano.

export default Componente;
