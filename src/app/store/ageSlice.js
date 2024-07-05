import { createSlice } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
  name: "age",
  initialState: { age: 5 },
  reducers: {
    increase2: (state, action) => {
      state.age = state.age + 1;
    },
    decrease2: (state, action) => {
      state.age = state.age - 1;
    },
  },
});

export const { increase2, decrease2 } = ageSlice.actions;

export const ageReducer = ageSlice.reducer;
