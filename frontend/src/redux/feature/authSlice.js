import { createSlice } from "@reduxjs/toolkit";

// state, reducers, actions

const initState = {
  user: null,
  token: localStorage.getItem("token") || null, // localstorage:
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    // setUser:(state, action) => {},
    setLogin: (state, action) => {
        state.user = action.payload.user,
        state.token = action.payload.token;
        // store token in localstorage:
        localStorage.setItem("token", action.payload.token); // "asdasdd"
    },
    setUser: (state, action) => {
        state.user = action.payload.user;
    },
    logout: (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
    }
  },
});

export const { setLogin, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
