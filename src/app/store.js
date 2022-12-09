import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import x from "../todoReducer";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    todo: x,
  },
});
