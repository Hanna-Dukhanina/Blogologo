import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./ChangeTheme/reducer";

const rootReducer = combineReducers({
    theme: reducer
})

export const store = configureStore({
    reducer: rootReducer
})