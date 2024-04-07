import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "../reducers/favoritesSlice";
import searchReducer from "../reducers/searchListSlice";
import activeFIlmReducer from "../reducers/activeFIlmSlice";

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        search: searchReducer,
        film: activeFIlmReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
