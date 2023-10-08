import {configureStore} from "@reduxjs/toolkit";
import authenticationReducer from "./slices/authenticationSlice";
import animalReducer from "./slices/animalSlice";

const store = configureStore({
    reducer: {
        authentication: authenticationReducer,
        animals: animalReducer
    }
})

export default store;