import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    changeInput: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    insert: (state, action) => ({
      ...state,
      todos: state.todos.concat(action.payload),
    }),
    toggle: (state, action) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ),
    }),
    remove: (state, action) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
});

export const { changeInput, insert, toggle, remove } = bookingSlice.actions;

export const bookingReducer = bookingSlice.reducer;
