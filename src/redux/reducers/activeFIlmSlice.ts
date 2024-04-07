import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TActiveFIlmState } from "../../types/TActiveFIlmState";

export const fetchFilmById = createAsyncThunk(
    'getFilm',
    async (filmId: string, thunkApi) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}?apikey=${import.meta.env.VITE_APP_API_KEY}&i=${filmId}`);
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

const initialState: TActiveFIlmState = {
    isActive: false,
    film: null,
    isLoading: false,
    error: null
};

export const activeFIlmSlice = createSlice({
    name: 'film/id',
    initialState,
    reducers: {
        changeActiveStatus: (state) => {
            state.isActive = !state.isActive
            state.film = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilmById.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchFilmById.fulfilled, (state, action) => {
            if (action.payload.Response === 'True') {
                state.film = action.payload
            } else {
                state.error = 'Этот фильм отсутствует'
                state.film = null;
            }
            state.isLoading = false;
        })

        builder.addCase(fetchFilmById.rejected, (state, action) => {
            state.isLoading = false;
            state.film = null;
            state.error=`Не удалось получить подробности о фильме. Произошла ошибка: ${action.payload}`
        })
    }})

export const { changeActiveStatus } = activeFIlmSlice.actions;
export default activeFIlmSlice.reducer
