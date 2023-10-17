import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Error404 } from "./pages/Error404";
import { MenuConceptos } from "./MenuConceptos";
import { User } from "./pages/User";
import { Products } from "./pages/Products";
import { ReactTopics } from "./pages/ReactTopics";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "./pages/Dashboard";

const ConceptosBasicos = () => {
  return (
    <>
      <Router>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Redirections always have to be on the top */}
          <Route path="/contact" element={<Navigate to="/about" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu-concepts" element={<MenuConceptos />} />
          <Route path="/user/:username/:age" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/react/*" element={<ReactTopics />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={<Dashboard />} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <hr />
      <h2>Hash Router</h2>
      <HashRouter>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Redirections always have to be on the top */}
          <Route path="/contact" element={<Navigate to="/about" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu-concepts" element={<MenuConceptos />} />
          <Route path="/user/:username/:age" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/react/*" element={<ReactTopics />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={<Dashboard />} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default ConceptosBasicos;
