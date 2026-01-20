import { createSlice } from "@reduxjs/toolkit";

// state, reducers, actions

// token => refresh-token (10min - 7days) => http-server-cookies (present, valid) , access-token (15-30min)=> redux state

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
      ((state.user = action.payload.user),
        (state.token = action.payload.token));
      // store token in localstorage:
      localStorage.setItem("token", action.payload.token); // "asdasdd"
      localStorage.setItem("uid", action.payload.user.id); // "asdasdd"
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setLogout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
    },
  },
});

export const { setLogin, setLogout, setUser } = authSlice.actions;
export default authSlice.reducer;
