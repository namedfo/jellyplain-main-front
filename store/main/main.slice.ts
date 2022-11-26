import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  selectedCategory: any;
  minPrice: number
  maxPrice: number
  size: null | any
  brand: null | any
  colors: any

  isOpenAuth: boolean;

  isOpenFiltred: boolean;
};

const initialState: initialStateType = {
  selectedCategory: {
    category: undefined,
    subcategory: undefined,
    
    name: "Все"
  },
  minPrice: 0,
  maxPrice: 99999,
  size: null,
  brand: null,
  colors: null,

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

    setValue: (state: initialStateType, action: any) => ({
      ...state,
      [action.payload.type]: action.payload.value
    })
  },
});

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;
