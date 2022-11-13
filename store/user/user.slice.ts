import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isAuth: boolean;
  isLoading: "idle" | "loading" | "success" | "error";
  user: any;
};

const initialState: initialStateType = {
  isAuth: false,
  isLoading: "idle",
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state: initialStateType, action: any) => ({
      ...state,
      isAuth: action.payload,
    }),
    setUser: (state: initialStateType, action: any) => ({
      ...state,
      user: action.payload,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
