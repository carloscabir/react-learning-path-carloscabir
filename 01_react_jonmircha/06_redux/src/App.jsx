import { Provider } from "react-redux";
import { Contador } from "./components/Contador";
import { CrudApi } from "./components/CrudApi";
import { ShopingCart } from "./components/ShopingCart";
import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux</h1>
        <hr />
        <CrudApi />
        <hr />
        <ShopingCart />
        <hr />
        <Contador />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
