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
    setCard: (state: initialStateType, action: any) => {
      if (state.cart.some((card: any) => card.info.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map((elem: any) =>
            elem.info.id === action.payload.id
              ? {
                  info: {
                    ...elem.info,
                  },
                  count: elem.count + 1,
                  totalPrice: elem.totalPrice + action.payload.price,
                }
              : elem
          ),
        };
      }
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            info: {
              ...action.payload,
            },
            count: 1,
            totalPrice: action.payload.price,
          },
        ],
      };
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
