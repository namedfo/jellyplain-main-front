import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  selectedCategory: string;

  isOpenAuth: boolean;

  isOpenFiltred: boolean;
};

const initialState: initialStateType = {
  selectedCategory: "all",

  isOpenAuth: false,

  isOpenFiltred: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setSelectedCategory: (state: initialStateType, action: any) => ({
      ...state,
      selectedCategory: action.payload,
    }),
    setIsOpenAuth: (state: initialStateType, action: any) => ({
      ...state,
      isOpenAuth: action.payload,
    }),
    setIsOpenFiltred: (state: initialStateType, action: any) => ({
      ...state,
      isOpenFiltred: action.payload,
    }),
  },
});

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;
