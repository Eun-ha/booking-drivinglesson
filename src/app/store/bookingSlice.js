import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    input: "",
    todos: [
      {
        id: 1,
        date: "20240719",
        time: 9,
        instructor: "홍길동",
        done: true,
      },
      {
        id: 2,
        date: "20240720",
        time: 12,
        instructor: "고영희",
        done: true,
      },
    ],
  },
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
