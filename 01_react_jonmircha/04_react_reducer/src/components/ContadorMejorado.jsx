import React, { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

export const ContadorMejorado = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const add = () => dispatch({ type: TYPES.INCREMENT });
  const add5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const substract = () => dispatch({ type: TYPES.DECREMENT });
  const substract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>Contador Mejorado Reducer </h2>
      <h3>{state.contador}</h3>
      <nav>
        <button onClick={add5}>+5</button>
        <button onClick={add}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={substract}>-</button>
        <button onClick={substract5}>-5</button>
      </nav>
    </div>
  );
};
