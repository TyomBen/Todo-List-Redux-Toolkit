import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./cartsSlices";

const store = configureStore({
  reducer: {
    todos: cartsReducer,
  },
});
export default store;
