import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    token: ''
}
export const authenticationSlice = createSlice({
    name: "authentication",
    initialState: INITIAL_STATE,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
})

export const { setToken } = authenticationSlice.actions;
export default authenticationSlice.reducer;