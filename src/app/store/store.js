import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { counterReducer } from "../store/counterSlice";
import { ageReducer } from "../store/ageSlice";
import { todoReducer } from "../store/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    age: ageReducer,
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
