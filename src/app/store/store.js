import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { counterReducer } from "../store/counterSlice";
import { ageReducer } from "../store/ageSlice";
import { todoReducer } from "../store/todoSlice";
import { bookingReducer } from "../store/bookingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    age: ageReducer,
    todos: todoReducer,
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
