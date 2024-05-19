import { configureStore } from "@reduxjs/toolkit";

import loader from "../slices/loader";
import auth from "../slices/auth";
import cart from "../slices/cart";

export const store = configureStore({
  reducer: {
    loader,
    auth,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
