import { CrudApi } from "./components/CrudApi";
import { MyPage } from "./components/MyPage";
import { MyPageContext } from "./components/MyPageContext";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <CrudProvider>
        <CrudApi />
      </CrudProvider>

      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
