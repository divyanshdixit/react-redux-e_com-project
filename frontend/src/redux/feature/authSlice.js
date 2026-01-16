import { createSlice } from "@reduxjs/toolkit";

// state, reducers, actions

const initState = {
    user: null,
    token: null, // localstorage:
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initState,
    reducers: {
       setLogin: (state, action) => {
            state.user = action.payload.user,
            state.token = action.payload.token
            // store token in localstorage:
            localStorage.setItem('token', action.payload.token) // "asdasdd"
       }
    }
})

export const {setLogin} = authSlice.actions;
export default authSlice.reducer;