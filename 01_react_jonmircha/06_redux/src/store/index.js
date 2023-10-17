import { configureStore, createStore } from "@reduxjs/toolkit";
import reducer from "../reducers";

// const store = configureStore(reducer);
const store = createStore(reducer);

store.subscribe(() => console.log(store));

export default store;
