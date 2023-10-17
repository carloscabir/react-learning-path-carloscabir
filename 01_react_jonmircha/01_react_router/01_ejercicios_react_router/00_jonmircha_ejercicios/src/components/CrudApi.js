import React, { useState, useEffect } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";

import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/songs";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
    });
    setLoading(false);
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`,
      options = {
        body: data,
        headers: { "content-type": "application/json" },
      };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id, name) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el ID: ${id}, con el nombre: ${name}`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    }
    return;
  };

  return (
    <div className="grid-1-2">
      <HashRouter /* basename="artists" */>
        <header>
          <h2>CRUD API</h2>
          <nav>
            <NavLink to="artists/" className={({ isActive }) => "active"}>
              Artistas
            </NavLink>
            <NavLink to="artists/add" className={({ isActive }) => "active"}>
              Agregar
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route
            path="artists/*"
            element={
              <div>
                <Routes>
                  <Route
                    path="/"
                    element={
                      db && (
                        <CrudTable
                          data={db}
                          deleteData={deleteData}
                          setDataToEdit={setDataToEdit}
                        />
                      )
                    }
                  />
                  <Route
                    path="/add"
                    element={
                      <CrudForm
                        createData={createData}
                        updateData={updateData}
                        dataToEdit={dataToEdit}
                        setDataToEdit={setDataToEdit}
                        redirect="/artists"
                      />
                    }
                  />
                  <Route
                    path="/edit/:id"
                    element={
                      <CrudForm
                        createData={createData}
                        updateData={updateData}
                        dataToEdit={dataToEdit}
                        setDataToEdit={setDataToEdit}
                        redirect="/artists"
                      />
                    }
                  />
                </Routes>
              </div>
            }
          />
          <Route
            path="artists/*"
            element={
              <div>
                <h2>Error 404</h2>
                <p>Not found</p>
              </div>
            }
          />
        </Routes>
      </HashRouter>
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
    </div>
  );
};
