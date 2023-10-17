import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Topic } from "./Topic";

export const ReactTopics = () => {
  return (
    <div>
      <h2>React </h2>
      <ul>
        <li>
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="state">Estado</Link>
        </li>
        <li>
          <Link to="components">Componentes</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route
          path=""
          element={
            <div>
              <h3>Elige un tema de React</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                eveniet odio sed atque nulla ex vero illum! Enim, labore ratione
                aliquam saepe maiores, eligendi perferendis necessitatibus quas,
                modi iure dolorem.
              </p>
            </div>
          }
        />
        <Route path="jsx" element={<Topic title="JSX" />} />
        <Route path="props" element={<Topic title="Props" />} />
        <Route path="state" element={<Topic title="State" />} />
        <Route path="components" element={<Topic title="Componentes" />} />
      </Routes>
    </div>
  );
};
