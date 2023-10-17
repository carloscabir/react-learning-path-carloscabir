import React, { useReducer, useState } from "react";

const initialState = { contador: 0 };

const init = () => {
  return {
    contador: initialState.contador + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };

    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };

    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };

    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };

    case TYPES.RESET:
      return initialState;

      return state;
  }
}

export const Contador = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const add = () => dispatch({ type: TYPES.INCREMENT });
  const add5 = () => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const substract = () => dispatch({ type: TYPES.DECREMENT });
  const substract5 = () => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });

  const reset = () => dispatch({ type: TYPES.RESET });

  return (
    <div>
      <h2>Contador Reducer </h2>
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
