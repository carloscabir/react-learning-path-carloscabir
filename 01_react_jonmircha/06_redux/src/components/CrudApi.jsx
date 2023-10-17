import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDataAction,
  deleteDataAction,
  notDataAction,
  readAllDataAction,
  updateDataAction,
} from "../actions/crudActions.js";
import { helpHttp } from "../helpers/helpHttp.js";

import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  const state = useSelector((state) => state);
  const { db } = state.crud;
  const dispatch = useDispatch();

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/songs";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        dispatch(readAllDataAction(res));
        setError(null);
      } else {
        dispatch(notDataAction());
        setError(res);
      }
    });
    setLoading(false);
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch(createDataAction(res));
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
      if (!res.err) {
        dispatch(updateDataAction(res));
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
          dispatch(deleteDataAction(id));
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
