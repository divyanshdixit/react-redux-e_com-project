import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../redux/feature/userSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer
  },
})