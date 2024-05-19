import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface userInfo {
  _id: string;
  username: string;
  email: string;
  gender: string;
  photo: string;
  role: string;
  createdAt: string;
}

export interface AuthState {
  token: string;
  user: userInfo;
}
export const initialStateAuth: AuthState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token") || "")
    : "",
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : {
        _id: "",
        username: "",
        email: "",
        gender: "",
        photo: "",
        role: "",
        createdAt: "",
      },
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string;
        user: userInfo;
      }>
    ) => {
      const newState: AuthState = {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return newState;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        token: "",
        user: {
          _id: "",
          username: "",
          email: "",
          photo: "",
          gender: "",
          role: "",
          createdAt: "",
        },
      };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
