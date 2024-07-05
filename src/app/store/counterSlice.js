import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { number: 2 },
  reducers: {
    increase: (state, action) => {
      state.number = state.number + 1;
    },
    decrease: (state, action) => {
      state.number = state.number - 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
