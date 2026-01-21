import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from './feature/authSlice';
import cartReducer from './feature/cartSlice';
import { api } from "./apiService/api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})