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
    plus: (state: initialStateType, action: any) => {

    },
    minus: (state: initialStateType, action: any) => {

    },
    removeCard: (state: initialStateType, action: any) => {
      const newObject = { ...state.cart }

      const totalPrice = newObject[action.payload].totalPrice

      delete newObject[action.payload];
      

      return {
        ...state,
        totalPrice: state.totalPrice - totalPrice,
        cart: newObject
      }
    },
    setCard: (state: initialStateType, action: any) => {
      const newProduct = {
        id: action?.payload?.id,
        title: action?.payload?.title,
        price: action?.payload?.price,
        type: action?.payload?.type,
        brand: action?.payload?.brand,
        category: action?.payload?.category,
        subcategory: action?.payload?.subcategory,
        productChild: {
          id: action?.payload?.selectedProductChild?.id,
          color: action?.payload?.selectedProductChild?.color,
          size: action?.payload?.selectedProductChild?.size,

          sizes: action?.payload?.selectedProductChild?.sizes,
          images: action?.payload?.selectedProductChild?.images,
        }
      }
      const id = `${newProduct?.id}_${newProduct?.productChild?.size}_${newProduct?.productChild?.color}`;


      if (
        state?.cart[id] &&
        state?.cart[id]?.info?.productChild?.size ===
        newProduct?.productChild?.size
      ) {
        const newCart = { ...state.cart };

        newCart[id] = {
          ...newCart[id],
          count: newCart[id].count + 1,
          totalPrice: newCart[id].totalPrice + newProduct?.price,
        };

        

        return {
          ...state,
          totalPrice: Object.values(newCart).reduce((prev: number, next: any) => prev + next.totalPrice, 0),
          cart: newCart,
        };
      }
      return {
        ...state,
        totalPrice: Object.values(state.cart).reduce((prev: number, next: any) => prev + next.totalPrice, 0) + newProduct?.price,
        cart: {
          ...state.cart,
          [id]: {
            id,
            info: {
              ...newProduct,
            },
            count: 1,
            totalPrice: newProduct?.price,
          },
        },
      };
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
