import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TFilmSearchObj } from "../../types/TFilmSearchObj";

const initialState: TFilmSearchObj[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        changeFavoritesStatus: (state, action: PayloadAction<TFilmSearchObj>) => {
            if (state.find((i) => i.imdbID === action.payload.imdbID)) {
                return state.filter((i) => i.imdbID !== action.payload.imdbID)
            } else {
                return [...state, action.payload]
            }
        }
    }
})

export const { changeFavoritesStatus } = favoritesSlice.actions;
export default favoritesSlice.reducer;
