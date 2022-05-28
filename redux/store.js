import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducers/index";

export default function configurestore(initialState) {
  return configureStore({ reducer: Reducer }, initialState);
}
