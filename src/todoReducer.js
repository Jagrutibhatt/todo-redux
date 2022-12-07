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
  },
});

export const { add } = todoSlice.actions;

export default todoSlice.reducer;
