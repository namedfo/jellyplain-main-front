import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  cart: any;
  totalPrice: number;
  cartIsShow: boolean;
};

const initialState: initialStateType = {
  cart: {},
  totalPrice: 0,
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
    removeCard: (state: initialStateType, action: any) => {
      const newObject = { ...state.cart }
      delete newObject[action.payload];

      return {
        ...state,
        cart: newObject
      }
    },
    setCard: (state: initialStateType, action: any) => {
      console.log(action.payload.productChild)
      const id = `${action.payload.id}_${action.payload.productChild.size}_${action.payload.productChild.colors.map((color: any) => color.hex).join()}`;
      console.log(id)
      if (
        state?.cart[id] &&
        state?.cart[id]?.info?.productChild?.size ===
          action?.payload?.productChild?.size
      ) {
        const newCart = { ...state.cart };

        newCart[id] = {
          ...newCart[id],
          count: newCart[id].count + 1,
          totalPrice: newCart[id].totalPrice + action.payload.price,
        };

        

        return {
          ...state,
          totalPrice: Object.values(newCart).reduce((prev: number, next: any) => prev + next.totalPrice, 0),
          cart: newCart,
        };
      }
      return {
        ...state,
        totalPrice: Object.values(state.cart).reduce((prev: number, next: any) => prev + next.totalPrice, 0) + action.payload.price,
        cart: {
          ...state.cart,
          [id]: {
            id,
            info: {
              ...action.payload,
            },
            count: 1,
            totalPrice: action.payload.price,
          },
        },
      };
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
