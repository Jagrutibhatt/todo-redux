import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = todoSlice.actions;
