import { Contador } from "./components/Contador";

function App() {
  return (
    <div className="App">
      <h1>Memorizacion en React</h1>
      <hr />
      <h2>Teoria</h2>
      <a
        href="https://beta.reactjs.org/reference/react/memo"
        target="_blank"
        rel="noreferrer"
      >
        memo
      </a>
      <ul>
        <li>Se encarga de renderizar un componente.</li>
        <li>Lo vuelve a memorizar al momento de que sus props cambien</li>
        <li>Evita re-renderizados</li>
        <li>
          Hay que evitarlo en la medida de lo posible pues podria ser mas
          costosa la tarea de memorizacion que para el renderizado del
          componente
        </li>
        <li>
          <h3>Usalo cuando:</h3>
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista</li>
            <li>Usamos datos de API's</li>
            <li>Un componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </li>
      </ul>
      <a href="https://beta.reactjs.org/reference/react/useCallback">
        useCallback
      </a>
      <ul>
        <li>Memoriza una funcion para no volverla a definir en cada render</li>
        <li>
          Usalo siempre que se pase una funcion como prop a un componente
          memorizado
        </li>
        <li>
          Usalo siempre que se pase una funcion como parametro de un efecto
        </li>
      </ul>
      <hr />
      <Contador />
    </div>
  );
}

export default App;
