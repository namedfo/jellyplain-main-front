import { configureStore } from '@reduxjs/toolkit'
//
import { cartReducer } from './cart/cart.slice'
import { mainReducer } from './main/main.slice'


export const store = configureStore({
    reducer: { cart: cartReducer, main: mainReducer }
})

export type TypeRootState = ReturnType<typeof store.getState>