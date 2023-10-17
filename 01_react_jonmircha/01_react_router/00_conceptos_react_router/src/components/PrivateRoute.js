import React from "react";
import { Navigate } from "react-router-dom";

/* export const PrivateRoute = (props) => {
  return <div>{props.component}</div>;
};
 */

/* export const PrivateRoute = ({ component }) => {
  return <div>{component}</div>;
};
 */

// Simulando autenticacion
let auth;
auth = null;
// auth = true;

export const PrivateRoute = ({ component }) => {
  return auth ? component : <Navigate to="/login" />;
};
