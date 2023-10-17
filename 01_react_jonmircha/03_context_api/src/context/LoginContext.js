import { createContext, useState } from "react";

const LoginContext = createContext();

const initialAuth = null;
const LoginProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  const data = { auth, handleAuth };

  return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>;
};

export default LoginContext;

export { LoginProvider };
