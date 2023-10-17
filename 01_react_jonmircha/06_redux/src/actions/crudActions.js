import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../types";

export const readAllDataAction = (res) => ({
  type: READ_ALL_DATA,
  payload: res,
});

export const createDataAction = (data) => ({
  type: CREATE_DATA,
  payload: data,
});

export const updateDataAction = (res) => ({
  type: UPDATE_DATA,
  payload: res,
});

export const deleteDataAction = (id) => ({ type: DELETE_DATA, payload: id });

export const notDataAction = () => ({ type: NO_DATA });
