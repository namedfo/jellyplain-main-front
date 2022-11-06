import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    selectedCategory: string
};

const initialState: initialStateType = {
    selectedCategory: "all",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setSelectedCategory: (state: initialStateType, action: any) => ({
        ...state,
        selectedCategory: action.category
    })
  },
});

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;