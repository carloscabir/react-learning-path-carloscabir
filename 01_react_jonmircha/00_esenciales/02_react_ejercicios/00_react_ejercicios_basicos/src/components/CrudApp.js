import React, { useState } from "react";

import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Bedroom",
    song: "In My Head",
  },
  {
    id: 2,
    name: "Roland Faunte",
    song: "Hand Over Hand",
  },
  {
    id: 3,
    name: "Ed Maverick",
    song: "Transiciones",
  },
  {
    id: 4,
    name: "Si",
    song: "nanana",
  },
];

export const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
    // console.log({ ...data, id: db.length + 1 });
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id, name) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el ID: ${id}, con el nombre: ${name}`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    }
    return;
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        />
      </article>
    </div>
  );
};
