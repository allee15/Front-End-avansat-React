import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";

const INITIAL_STATE = {
    token: ''
}

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState: INITIAL_STATE,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
            auth.signOut();
        },
        deleteAccount: (state) => {
            state.token = null;
            auth.currentUser.delete().then(() => {
                console.log("User deleted");
            }).catch((error) => {
                console.log(error);
            });
        }
    }
})

export const { setToken, logout, deleteAccount } = authenticationSlice.actions;

export default authenticationSlice.reducer;
