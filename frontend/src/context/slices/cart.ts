import { ProductCart } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartInfo {
  quantity: number;
  products: ProductCart[];
}

export interface CartState {
  cart: cartInfo;
}

export const initialStateCart: CartState = {
  cart: {
    quantity: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart") || "")
      : 0,
    products: localStorage.getItem("productCart")
      ? JSON.parse(localStorage.getItem("productCart") || "")
      : [],
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
        product: ProductCart;
      }>
    ) => {
      const newState: CartState = {
        ...state,
        cart: {
          quantity: state.cart.quantity + action.payload.quantity,
          products: [...state.cart.products, action.payload.product],
        },
      };

      localStorage.setItem("cart", JSON.stringify(newState.cart.quantity));
      localStorage.setItem(
        "productCart",
        JSON.stringify(newState.cart.products)
      );

      return newState;
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{
        quantity: number;
        id: string;
      }>
    ) => {
      const newState: CartState = {
        ...state,
        cart: {
          quantity: state.cart.quantity - action.payload.quantity,
          products: state.cart.products.filter(
            (product) => product.id !== action.payload.id
          ),
        },
      };

      localStorage.setItem("cart", JSON.stringify(newState.cart.quantity));
      localStorage.setItem(
        "productCart",
        JSON.stringify(newState.cart.products)
      );

      return newState;
    },
    setCart: (
      state,
      action: PayloadAction<{
        quantity: number;
        products: ProductCart[];
      }>
    ) => {
      const newState: CartState = {
        ...state,
        cart: {
          quantity: action.payload.quantity,
          products: action.payload.products,
        },
      };

      localStorage.setItem("cart", JSON.stringify(newState.cart.quantity));
      localStorage.setItem(
        "productCart",
        JSON.stringify(newState.cart.products)
      );

      return newState;
    },
    removeCart: (state) => {
      const newState: CartState = {
        ...state,
        cart: {
          quantity: 0,
          products: [],
        },
      };

      localStorage.removeItem("cart");
      localStorage.removeItem("productCart");

      return newState;
    },
  },
});

export const { addProductToCart, removeProductFromCart, setCart, removeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
