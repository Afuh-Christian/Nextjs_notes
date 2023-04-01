import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./ItemSlice/ItemSlice";
import CategoryReducer from "./CategorySlice/CategorySlice";

export const store = configureStore({
    reducer: {
        itemred: itemReducer,
        categoryred : CategoryReducer
    }
})
