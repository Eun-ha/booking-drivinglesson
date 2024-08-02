import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    insert: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    remove: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
    edit: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              date: action.payload.date,
              time: action.payload.time,
              instructor: action.payload.instructor,
            }
          : todo
      ),
    }),
  },
});

export const { insert, remove, edit } = bookingSlice.actions;

export const bookingReducer = bookingSlice.reducer;
