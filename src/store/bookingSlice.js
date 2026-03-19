import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

const mockInsertBookingApi = async (payload) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload.date || !payload.time || !payload.instructor) {
        reject(new Error("필수 예약 정보가 누락되었습니다."));
        return;
      }

      resolve(payload);
    }, 500);
  });

export const insertAsync = createAsyncThunk(
  "booking/insertAsync",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await mockInsertBookingApi(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(insertAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(insertAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = state.todos.concat(action.payload);
      })
      .addCase(insertAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? "예약 저장 중 오류가 발생했습니다.";
      });
  },
});

export const { insert, remove, edit } = bookingSlice.actions;

export const bookingReducer = bookingSlice.reducer;
