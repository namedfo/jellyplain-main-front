import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type initialStateType = {
    user: any,
    status: 'loading' | 'authorized' | 'unauthorized' | 'error'
}


const initialState: initialStateType = {
    user: {},
    status: 'unauthorized'
}
 

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions