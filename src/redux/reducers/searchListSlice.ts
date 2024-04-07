import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TSearchState } from '../../types/TSearchState'


export const fetchSearchFilms = createAsyncThunk(
    'search/films',
    async (search: string, thunkApi) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}?apikey=${import.meta.env.VITE_APP_API_KEY}&s=${search}`);
            const data = await response.json();
            return data
        } catch (error: unknown) {
            if ( error instanceof Error) {
                const { message } = error;
            return thunkApi.rejectWithValue(message)
            }
        }
    }
)

const initialState: TSearchState = {
    films: [],
    isLoading: false,
    error: null
}

export const favoritesSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSearchFilms.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchSearchFilms.fulfilled, (state, action) => {
            if (action.payload.Response === 'True') {
                state.films = action.payload.Search
            } else {
                state.error = 'Ничего не найдено'
                state.films = [];
            }
            state.isLoading = false;
        })

        builder.addCase(fetchSearchFilms.rejected, (state, action) => {
            state.isLoading = false;
            state.films = [];
            state.error=`Не удалось осуществить поиск. Произошла ошибка: ${action.payload}`
        })
    }
})

export default favoritesSlice.reducer
