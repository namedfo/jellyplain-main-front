import { configureStore } from "@reduxjs/toolkit";
//
import { cartReducer } from "./cart/cart.slice";
import { mainReducer } from "./main/main.slice";
import { userReducer } from "./user/user.slice";

export const store = configureStore({
  reducer: { cart: cartReducer, main: mainReducer, user: userReducer },
});

export type TypeRootState = ReturnType<typeof store.getState>;
