import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  cart: any;
  cartIsShow: boolean;
};

const initialState: initialStateType = {
  cart: [],
  cartIsShow: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartIsShow: (state: initialStateType, action: any) => ({
      ...state,
      cartIsShow: action.payload,
    }),
    setCard: (state: initialStateType, action: any) => ({
      ...state,
      cart: state.cart.length > 0 ? [ ...state.cart, action.payload ] : [action.payload],
    }),
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
