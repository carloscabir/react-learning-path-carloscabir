import React, { useState, useEffect, useReducer } from "react";
import { TYPES } from "../actions/crudActions.js";
import { helpHttp } from "../helpers/helpHttp.js";
import { crudInitialState, crudReducer } from "../reducers/crud.reducer.js";

import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
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
        // setDb(res);
        dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
        setError(null);
      } else {
        // setDb(null);
        dispatch({ type: TYPES.NO_DATA });
        setError(res);
      }
    });
    setLoading(false);
  }, [url]);

  const createData = async (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    await api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
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
        // let newData = db.map((el) => (el.id === data.id ? data : el));
        // setDb(newData);
        dispatch({ type: TYPES.UPDATE_DATA, payload: res });
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
          // let newData = db.filter((el) => el.id !== id);
          // setDb(newData);
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
        } else {
          setError(res);
        }
      });
    }
    return;
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          />
        )}
      </article>
    </div>
  );
};
