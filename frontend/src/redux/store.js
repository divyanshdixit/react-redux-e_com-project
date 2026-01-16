import { configureStore } from "@reduxjs/toolkit";
import authReducer from './feature/authSlice';
import { api } from "./apiService/api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})