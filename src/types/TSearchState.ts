import { TFilmSearchObj } from "./TFilmSearchObj"

export type TSearchState = {
    films: TFilmSearchObj[],
    isLoading: boolean,
    error: null | string
}
