import { createSlice } from "@reduxjs/toolkit";

// state, reducers, actions

const initState = {
    user: {},
    loading: false,
    error: null
}

const UserSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {setUser} = UserSlice.actions;
export default UserSlice.reducer;