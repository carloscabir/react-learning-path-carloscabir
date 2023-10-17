import React from "react";
import { Link, NavLink } from "react-router-dom";

export const MenuConceptos = () => {
  return (
    <nav>
      <h2>Conceptos de Menu de Navegacion</h2>
      <ol>
        <li>
          <span>Menu con enlaces de HTML (no recomendado)</span>
          <a href="/">Home</a>
          <a href="/contact">Contacto</a>
          <a href="/about">Acerca</a>
        </li>
        <li>
          <span>Menu con componente Link (SPA)</span>
          <Link to="/">Home</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/about">Acerca</Link>
        </li>
        <li>
          <span>Menu con componente NavLink (revisar documnetacion )</span>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contacto
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Acerca
          </NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <Link to="/user/carloscabi/15">carlos cabi</Link>
          <Link to="/user/kenai/10">kenai</Link>
        </li>
        <li>
          <span>Parametros de Consulta</span>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <span>Redirecciones</span>
          <Link to="/about">Acerca</Link>
          <Link to="/contact">Contacto -redireccion a Acerca-</Link>
        </li>
        <li>
          <span>Rutas Anidadas</span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas Privadas</span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">DashBoard</Link>
        </li>
      </ol>
    </nav>
  );
};
