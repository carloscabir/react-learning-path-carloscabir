import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const sumar = () => setCounter(counter + 1);

  const restar = () => setCounter(counter - 1);

  return (
    <div className="App">
      <h2>Hola mundo soy una PWA</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h2>Contador: {counter}</h2>
    </div>
  );
}

export default App;
