import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartInfo {
  quantity: number;
}

export interface CartState {
  cart: cartInfo;
}

export const initialStateCart: CartState = {
  cart: {
    quantity: 0,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateCart,
  reducers: {
    addProductToCart: (
      state,
      action: PayloadAction<{
        quantity: number;
      }>
    ) => {
      const newState: CartState = {
        ...state,
        cart: {
          quantity: state.cart.quantity + action.payload.quantity,
        },
      };
      return newState;
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{
        quantity: number;
      }>
    ) => {
      const newState: CartState = {
        ...state,
        cart: {
          quantity: state.cart.quantity - action.payload.quantity,
        },
      };
      return newState;
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
