import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  READ_ONE_DATA,
  UPDATE_DATA,
} from "../types";

const crudInitialState = {
  db: null,
};

export function crudReducer(state = crudInitialState, action) {
  switch (action.type) {
    case READ_ALL_DATA: {
      let data = action.payload.map((data) => data);
      return {
        ...state,
        db: data,
      };
    }

    case CREATE_DATA: {
      return {
        ...state,
        db: [...state.db, action.payload],
      };
    }

    case READ_ONE_DATA: {
    }

    case UPDATE_DATA: {
      let newData = state.db.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
      return {
        ...state,
        db: newData,
      };
    }

    case DELETE_DATA: {
      let newData = state.db.filter((el) => el.id !== action.payload);
      return {
        ...state,
        db: newData,
      };
    }

    case NO_DATA:
      return crudInitialState;

    default:
      return state;
  }
}
