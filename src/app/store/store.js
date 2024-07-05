import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { counterReducer } from "../store/counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
