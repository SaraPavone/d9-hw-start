import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import listReducer from "../reducers/listReducer";

const mainReducer = combineReducers({
    favourites: favouriteReducer,
    list: listReducer,
})

const store = configureStore({
    reducer: mainReducer
});

export default store