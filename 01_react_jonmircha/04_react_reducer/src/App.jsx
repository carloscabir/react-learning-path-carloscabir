import { useState } from "react";
import { Contador } from "./components/Contador";
import { ContadorMejorado } from "./components/ContadorMejorado";
import { CrudApi } from "./components/CrudApi";
import { ShopingCart } from "./components/ShopingCart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <CrudApi />
      <hr />
      <ShopingCart />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
