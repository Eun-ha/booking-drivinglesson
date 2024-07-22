import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { counterReducer } from "./counterSlice";
import { ageReducer } from "./ageSlice";
import { todoReducer } from "./todoSlice";
import { bookingReducer } from "./bookingSlice";

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

type AppStore = typeof store;
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
