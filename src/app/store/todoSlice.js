import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    input: "test",
    todos: [
      {
        id: 1,
        text: "리덕스 기초 배우기",
        done: true,
      },
      {
        id: 2,
        text: "리액트와 리덕스 사용하기",
        done: false,
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

export const { changeInput, insert, toggle, remove } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
