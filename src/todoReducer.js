import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    update: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
  },
});

// a gateway for listening to data.
export const todoSelector = (state) => state.todo.value;

// for components to access actions to be able to dispatch them
export const { add, update } = todoSlice.actions;

export default todoSlice.reducer;
