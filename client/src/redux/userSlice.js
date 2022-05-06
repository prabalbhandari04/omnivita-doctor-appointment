import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    
    name: "user",
    initialState: {
        username: "Ramesh Kumar",
        email: "rameshk@gmail.com"
    },
    reducers: {
        update: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
    }
})

export const { update } = userSlice.actions;
export default userSlice.reducer;