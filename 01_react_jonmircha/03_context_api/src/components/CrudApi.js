import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";

export const CrudApi = () => {
  const { error, db, loading } = useContext(CrudContext);

  return (
    <div>
      <h2>CRUD API con Context API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && <Message bgColor="#dc3545" />}
        {db && <CrudTable />}
      </article>
    </div>
  );
};
