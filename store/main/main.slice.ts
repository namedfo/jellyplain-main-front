import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  selectedCategory: any;
  minPrice: number;
  maxPrice: number;
  size: null | any;
  brands: null | any;
  colors: any;

  order: any

  isOpenAuth: boolean;

  isOpenFiltred: boolean;

  shipping: string,
};

const initialState: initialStateType = {
  selectedCategory: {
    category: undefined,
    subcategory: undefined,

    name: "Все",
  },
  minPrice: 0,
  maxPrice: 99999,
  size: null,
  brands: {
    nike: false,
    adidas: false,
    underarmour: false,
    thenorthface: false,
  },
  colors: null,

  order: null,

  isOpenAuth: false,

  isOpenFiltred: false,

  shipping: "pochtaru",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setShipping: (state: any, action: any) => ({
      ...state,
      shipping: action.payload
    }),
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
      brands: {
        ...state.brands,
        [action.payload.type]: action.payload.value,
      },
    }),

    setOrder: (state: initialStateType, action: any) => ({
      ...state,
      order: action.payload
    })
  },
});

export const mainReducer = mainSlice.reducer;
export const mainActions = mainSlice.actions;
