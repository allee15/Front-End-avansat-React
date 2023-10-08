import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
    animals: []
}

const animalsSlice = createSlice({
    name: "animals",
    initialState: INITIAL_STATE,
    reducers: {
        setAnimals: (state, action) => {
            state.animals = action.payload;
        }
    }
})

export const { setAnimals } = animalsSlice.actions;
export default animalsSlice.reducer;